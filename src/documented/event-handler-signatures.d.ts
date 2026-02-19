/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./types.d.ts" />
/* eslint-enable @typescript-eslint/triple-slash-reference */

declare namespace documentedMod {
    namespace EventHandlerSignatures {
        /**
         * This will trigger when a Player enters an AreaTrigger.
         * Note: The AreaTrigger has to be placed in Godot scene, assigned an ObjId and a CollisionPolygon3D(volume).
         * @param eventPlayer - The player that entered the AreaTrigger.
         * @param eventAreaTrigger - The AreaTrigger that the player entered.
         */
        export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void;

        /**
         * This will trigger when a Player enters a CapturePoint capturing area.
         * Note: The CapturePoint has to be placed in Godot scene, assigned an ObjId and a CapturePointArea(volume).
         * @param eventPlayer - The player that entered the CapturePoint.
         * @param eventCapturePoint - The CapturePoint that the player entered.
         */
        export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void;

        /**
         * This will trigger when a Player exits an AreaTrigger.
         * Note: The AreaTrigger has to be placed in Godot scene, assigned an ObjId and a CollisionPolygon3D(volume).
         * @param eventPlayer - The player that exited the AreaTrigger.
         * @param eventAreaTrigger - The AreaTrigger that the player exited.
         */
        export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void;

        /**
         * This will trigger when a Player exits a CapturePoint capturing area.
         * Note: The CapturePoint has to be placed in Godot scene, assigned an ObjId and a CapturePointArea(volume).
         * @param eventPlayer - The player that exited the CapturePoint.
         * @param eventCapturePoint - The CapturePoint that the player exited.
         */
        export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void;

        /**
         * This will trigger when a Player interacts with an UI button.
         * Note: The `eventUIButtonEvent` argument does not seem to work, so you may need to always treat this as a
         * click.
         * @param eventPlayer - The player that interacted with the UI button.
         * @param eventUIWidget - The UI widget that the player interacted with.
         * @param eventUIButtonEvent - The event that occurred.
         */
        export function OnPlayerUIButtonEvent(
            eventPlayer: mod.Player,
            eventUIWidget: mod.UIWidget,
            eventUIButtonEvent: mod.UIButtonEvent
        ): void;

        /**
         * This will trigger when any player leaves the game.
         * @param eventNumber - The id of the player that left the game.
         */
        export function OnPlayerLeaveGame(eventNumber: number): void;
    }
}
