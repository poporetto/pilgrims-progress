import * as THREE from 'three';

/** What the camera should be framing this frame. */
export interface CameraFrame {
  /** World point the camera tracks (usually the player). */
  focus: THREE.Vector3;
  /** Offset from the tracked point to the camera eye. */
  offset: THREE.Vector3;
  /** Height above the tracked point the camera looks at. */
  lookHeight?: number;
  /** Follow stiffness (higher = tighter). */
  follow?: number;
}

/**
 * Soft, damped third-person camera shared by every chapter.
 *
 * - Position follow uses frame-rate independent exponential damping, so it
 *   feels identical at 30, 60 or 144 fps.
 * - Offset and look-height changes (entering a house, a dungeon, a battle
 *   framing) glide instead of snapping.
 * - A teleport (e.g. stepping through a doorway into an interior that is
 *   built far away on the same scene) is detected and snapped, so the camera
 *   never visibly sweeps across the world behind a screen fade.
 * - A tiny, decaying "nudge" can be added for interaction feedback.
 */
export class CameraController {
  readonly target: THREE.Vector3;
  private readonly offset = new THREE.Vector3();
  private lookHeight = 1.4;
  private readonly nudge = new THREE.Vector3();
  private readonly tmp = new THREE.Vector3();
  private initialised = false;

  constructor(private readonly camera: THREE.PerspectiveCamera, target?: THREE.Vector3) {
    this.target = target ?? new THREE.Vector3();
  }

  /** Jump straight to a framing (used on chapter entry and after teleports). */
  snap(frame: CameraFrame): void {
    this.target.copy(frame.focus);
    this.offset.copy(frame.offset);
    this.lookHeight = frame.lookHeight ?? 1.4;
    this.nudge.set(0, 0, 0);
    this.initialised = true;
    this.apply();
  }

  /** A small positional kick that decays on its own (interaction feedback). */
  kick(x: number, y: number, z: number): void {
    this.nudge.x += x;
    this.nudge.y += y;
    this.nudge.z += z;
  }

  update(dt: number, frame: CameraFrame, reducedMotion: boolean): void {
    if (!this.initialised || this.target.distanceToSquared(frame.focus) > 30 * 30) {
      // first frame, or the actor was teleported into a far-off interior
      this.snap(frame);
      return;
    }
    const follow = frame.follow ?? 4;
    const k = reducedMotion ? 1 : 1 - Math.exp(-follow * dt);
    const ko = reducedMotion ? 1 : 1 - Math.exp(-2.6 * dt);
    this.target.lerp(frame.focus, k);
    this.offset.lerp(frame.offset, ko);
    this.lookHeight += ((frame.lookHeight ?? 1.4) - this.lookHeight) * ko;
    this.nudge.multiplyScalar(reducedMotion ? 0 : Math.exp(-9 * dt));
    this.apply();
  }

  private apply(): void {
    this.tmp.copy(this.target).add(this.offset).add(this.nudge);
    this.camera.position.copy(this.tmp);
    this.camera.lookAt(this.target.x, this.target.y + this.lookHeight, this.target.z);
  }
}
