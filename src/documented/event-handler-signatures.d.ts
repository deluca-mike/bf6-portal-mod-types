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

        /**
         * This will trigger per server tick.
         */
        export function OngoingGlobal(): void;

        /**
         * This will trigger per server tick for each AreaTrigger.
         * @param eventAreaTrigger - The AreaTrigger that is being processed.
         */
        export function OngoingAreaTrigger(eventAreaTrigger: mod.AreaTrigger): void;

        /**
         * This will trigger per server tick for each Bomb.
         * @param eventBomb - The Bomb that is being processed.
         */
        export function OngoingBomb(eventBomb: mod.Bomb): void;

        /**
         * This will trigger per server tick for each CapturePoint.
         * @param eventCapturePoint - The CapturePoint that is being processed.
         */
        export function OngoingCapturePoint(eventCapturePoint: mod.CapturePoint): void;

        /**
         * This will trigger per server tick for each EmplacementSpawner.
         * @param eventEmplacementSpawner - The EmplacementSpawner that is being processed.
         */
        export function OngoingEmplacementSpawner(eventEmplacementSpawner: mod.EmplacementSpawner): void;

        /**
         * This will trigger per server tick for each HQ.
         * @param eventHQ - The HQ that is being processed.
         */
        export function OngoingHQ(eventHQ: mod.HQ): void;

        /**
         * This will trigger per server tick for each InteractPoint.
         * @param eventInteractPoint - The InteractPoint that is being processed.
         */
        export function OngoingInteractPoint(eventInteractPoint: mod.InteractPoint): void;

        /**
         * This will trigger per server tick for each LootSpawner.
         * @param eventLootSpawner - The LootSpawner that is being processed.
         */
        export function OngoingLootSpawner(eventLootSpawner: mod.LootSpawner): void;

        /**
         * This will trigger per server tick for each MCOM.
         * @param eventMCOM - The MCOM that is being processed.
         */
        export function OngoingMCOM(eventMCOM: mod.MCOM): void;

        /**
         * This will trigger per server tick for each Player.
         * @param eventPlayer - The Player that is being processed.
         */
        export function OngoingPlayer(eventPlayer: mod.Player): void;

        /**
         * This will trigger per server tick for each RingOfFire.
         * @param eventRingOfFire - The RingOfFire that is being processed.
         */
        export function OngoingRingOfFire(eventRingOfFire: mod.RingOfFire): void;

        /**
         * This will trigger per server tick for each Sector.
         * @param eventSector - The Sector that is being processed.
         */
        export function OngoingSector(eventSector: mod.Sector): void;

        /**
         * This will trigger per server tick for each Spawner.
         * @param eventSpawner - The Spawner that is being processed.
         */
        export function OngoingSpawner(eventSpawner: mod.Spawner): void;

        /**
         * This will trigger per server tick for each SpawnPoint.
         * @param eventSpawnPoint - The SpawnPoint that is being processed.
         */
        export function OngoingSpawnPoint(eventSpawnPoint: mod.SpawnPoint): void;

        /**
         * This will trigger per server tick for each Team.
         * @param eventTeam - The Team that is being processed.
         */
        export function OngoingTeam(eventTeam: mod.Team): void;

        /**
         * This will trigger per server tick for each Vehicle.
         * @param eventVehicle - The Vehicle that is being processed.
         */
        export function OngoingVehicle(eventVehicle: mod.Vehicle): void;

        /**
         * This will trigger per server tick for each VehicleSpawner.
         * @param eventVehicleSpawner - The VehicleSpawner that is being processed.
         */
        export function OngoingVehicleSpawner(eventVehicleSpawner: mod.VehicleSpawner): void;

        /**
         * This will trigger per server tick for each WaypointPath.
         * @param eventWaypointPath - The WaypointPath that is being processed.
         */
        export function OngoingWaypointPath(eventWaypointPath: mod.WaypointPath): void;

        /**
         * This will trigger per server tick for each WorldIcon.
         * @param eventWorldIcon - The WorldIcon that is being processed.
         */
        export function OngoingWorldIcon(eventWorldIcon: mod.WorldIcon): void;
    }
}
