/////////////////////////////////////////////////////////////////////////////
//
// Version: 1.1.3.0
//
/////////////////////////////////////////////////////////////////////////////

/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="./runtime-spawn-enums/abbasid.d.ts" />
/// <reference path="./runtime-spawn-enums/aftermath.d.ts" />
/// <reference path="./runtime-spawn-enums/badlands.d.ts" />
/// <reference path="./runtime-spawn-enums/battery.d.ts" />
/// <reference path="./runtime-spawn-enums/capstone.d.ts" />
/// <reference path="./runtime-spawn-enums/common.d.ts" />
/// <reference path="./runtime-spawn-enums/dumbo.d.ts" />
/// <reference path="./runtime-spawn-enums/eastwood.d.ts" />
/// <reference path="./runtime-spawn-enums/fire-storm.d.ts" />
/// <reference path="./runtime-spawn-enums/granite-downtown.d.ts" />
/// <reference path="./runtime-spawn-enums/granite-marina.d.ts" />
/// <reference path="./runtime-spawn-enums/granite-military-rnd.d.ts" />
/// <reference path="./runtime-spawn-enums/granite-military-storage.d.ts" />
/// <reference path="./runtime-spawn-enums/granite-residential-north.d.ts" />
/// <reference path="./runtime-spawn-enums/granite-tech-center.d.ts" />
/// <reference path="./runtime-spawn-enums/limestone.d.ts" />
/// <reference path="./runtime-spawn-enums/outskirts.d.ts" />
/// <reference path="./runtime-spawn-enums/sand.d.ts" />
/// <reference path="./runtime-spawn-enums/tungsten.d.ts" />

/// <reference path="./types.d.ts" />
/// <reference path="./enums.d.ts" />
/// <reference path="./event-handler-signatures.d.ts" />
/* eslint-enable @typescript-eslint/triple-slash-reference */

declare namespace mod {
    export const stringkeys: Any;

    /**
     * Adds a synchronous/awaitable execution delay in seconds.
     * @param n - The number of seconds to wait (can be fractional).
     * @returns A promise that resolves when the delay is complete.
     */
    export function Wait(n: number): Promise<void>;

    /**
     * Loads a music package to then be triggered with the `mod.PlayMusic` action.
     * Music packages must first be loaded (such as loading in all Battle Royale music using `mod.LoadMusic(mod.MusicPackages.BR)`).
     * It is advised to do this as early as possible to allow a few seconds of time for the music to load in.
     * Typically, you'd load it in during `OnGameModeStarted()`.
     * The way a music package is laid out, is that certain music events are designed to seamlessly transition into the next event.
     * @example
     * export async function OnGameModeStarted() {
     *     mod.LoadMusic(mod.MusicPackages.Core);
     *     mod.SetMusicParam(mod.MusicParams.Core_Amplitude, 1.3);
     * }
     *
     * function SomeFunctionInYourExperience(winningTeam: Team, losingTeam: Team) {
     *     mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1, winningTeam);
     *     mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 0, losingTeam);
     *     mod.PlayMusic(mod.MusicEvents.Core_EndOfRound_Loop);
     * }
     * @param musicPackage - The music package to load.
     */
    export function LoadMusic(musicPackage: MusicPackages): void;

    /**
     * Plays a music event for all players.
     * You can play any music event that is part of the loaded music packages.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     * @param musicEvent - The music event to play.
     */
    export function PlayMusic(musicEvent: MusicEvents): void;

    /**
     * Plays a music event for a specific team.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     * @param musicEvent - The music event to play.
     * @param team - The team to play the music event for.
     */
    export function PlayMusic(musicEvent: MusicEvents, team: Team): void;

    /**
     * Plays a music event for a specific squad.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     * @param musicEvent - The music event to play.
     * @param squad - The squad to play the music event for.
     */
    export function PlayMusic(musicEvent: MusicEvents, squad: Squad): void;

    /**
     * Plays a music event for a specific player.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     * @param musicEvent - The music event to play.
     * @param player - The player to play the music event for.
     */
    export function PlayMusic(musicEvent: MusicEvents, player: Player): void;

    /**
     * Updates any parameters that a music package might have.
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     * @param musicParam - The music parameter to update.
     * @param paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that it’s a
     *                     boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number): void;

    /**
     * Updates any parameters that a music package might have, for a specific team.
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     * @param musicParam - The music parameter to update.
     * @param paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that it’s a
     *                     boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     * @param team - The team to update the parameter for.
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number, team: Team): void;

    /**
     * Updates any parameters that a music package might have, for a specific squad.
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     * @param musicParam - The music parameter to update.
     * @param paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that it’s a
     *                     boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     * @param squad - The squad to update the parameter for.
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number, squad: Squad): void;

    /**
     * Updates any parameters that a music package might have, for a specific player.
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     * @param musicParam - The music parameter to update.
     * @param paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that it’s a
     *                     boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     * @param player - The player to update the parameter for.
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number, player: Player): void;

    /**
     * Sets the value of a Variable.
     * @param variable - The variable to set the value of.
     * @param value - The value to set the variable to.
     */
    export function SetVariable(variable: Variable, value: Any): void;

    /**
     * Unloads a music package that is already loaded.
     * This is almost never necessary. In official Battlefield modes, music is always loaded at the start, and it is never unloaded mid-match.
     * @param musicPackage - The music package to unload.
     */
    export function UnloadMusic(musicPackage: MusicPackages): void;

    /**
     * Sets a player to act independently. They will attempt to complete objectives, fire on enemy players, etc.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     */
    export function AIBattlefieldBehavior(player: Player): void;

    /**
     * Sets a player to defend an area around a location.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     * @param defendPosition - The position to defend.
     * @param minDistance - The minimum distance from the defend position.
     * @param maxDistance - The maximum distance from the defend position.
     */
    export function AIDefendPositionBehavior(
        player: Player,
        defendPosition: Vector,
        minDistance: number,
        maxDistance: number
    ): void;

    /**
     * Sets a player's current position as idle point.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     */
    export function AIIdleBehavior(player: Player): void;

    /**
     * Sets a player to move to a location with a line of sight to a specific position.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     * @param position - The position to move to.
     */
    export function AILOSMoveToBehavior(player: Player, position: Vector): void;

    /**
     * Sets a player a destination to move to.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     * @param position - The position to move to.
     */
    export function AIMoveToBehavior(player: Player, position: Vector): void;

    /**
     * Sets a player to use parachute.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     */
    export function AIParachuteBehavior(player: Player): void;

    /**
     * Sets a player to move to a valid position on navmesh near a location.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     * @param position - The position to move to.
     */
    export function AIValidatedMoveToBehavior(player: Player, position: Vector): void;

    /**
     * Sets a player to patrol a waypoint.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the behavior for.
     * @param waypointPath - The waypoint path to patrol.
     */
    export function AIWaypointIdleBehavior(player: Player, waypointPath: WaypointPath): void;

    /**
     * Use this on an AI Spawner to control whether AI soldiers spawned will leave the game after they are killed.
     * @param spawner - The spawner to set the behavior for.
     * @param enableUnspawnOnDead - Whether to enable or disable unspawning on death.
     */
    export function AISetUnspawnOnDead(spawner: Spawner, enableUnspawnOnDead: boolean): void;

    // Sets the time (in seconds) it takes for AI soldiers from the provided Spawner to unspawn after death.
    export function SetUnspawnDelayInSeconds(spawner: Spawner, delay: number): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param classToSpawn - The class of the AI to spawn.
     * @param name - The name of the AI to spawn.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass, name: Message): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param classToSpawn - The class of the AI to spawn.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param name - The name of the AI to spawn.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, name: Message): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, team: Team): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param classToSpawn - The class of the AI to spawn.
     * @param name - The name of the AI to spawn.
     * @param team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass, name: Message, team: Team): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param classToSpawn - The class of the AI to spawn.
     * @param team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass, team: Team): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     * @param spawner - The spawner to spawn the AI from.
     * @param name - The name of the AI to spawn.
     * @param team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, name: Message, team: Team): void;

    /**
     * Unspawns all AIs who were spawned by a specific AI Spawner.
     * @param spawner - The spawner to unspawn the AI from.
     */
    export function UnspawnAllAIsFromAISpawner(spawner: Spawner): void;

    /**
     * Enables or disables shooting for AI.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to enable shooting for.
     */
    export function AIEnableShooting(player: Player): void;

    /**
     * Enables or disables shooting for AI.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to enable shooting for.
     * @param enable - Whether to enable or disable shooting.
     */
    export function AIEnableShooting(player: Player, enable: boolean): void;

    /**
     * Enables or disables targeting for AI. An AI unable to target cannot shoot, but will also not notice other soldiers.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to enable targeting for.
     */
    export function AIEnableTargeting(player: Player): void;

    /**
     * Enables or disables targeting for AI. An AI unable to target cannot shoot, but will also not notice other soldiers.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to enable targeting for.
     * @param enable - Whether to enable or disable targeting.
     */
    export function AIEnableTargeting(player: Player, enable: boolean): void;

    /**
     * Forces an AI player to fire or activate whatever weapon or gadget they are holding in their hands for a length of time.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to force fire.
     * @param fireDuration - The duration to force fire for.
     */
    export function AIForceFire(player: Player, fireDuration: number): void;

    /**
     * Tweak settings for a player's gadgets.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to tweak gadget settings for.
     * @param applyUsageCriteria - Whether to apply usage criteria.
     * @param applyCoolDownAfterUse - Whether to apply cool down after use.
     * @param applyInaccuracy - Whether to apply inaccuracy.
     */
    export function AIGadgetSettings(
        player: Player,
        applyUsageCriteria: boolean,
        applyCoolDownAfterUse: boolean,
        applyInaccuracy: boolean
    ): void;

    /**
     * Sets a player's focus point, possibly asking it to fire at it.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the focus point for.
     * @param point - The point to set the focus point to.
     * @param isTarget - Whether the point is a target.
     */
    export function AISetFocusPoint(player: Player, point: Vector, isTarget: boolean): void;

    /**
     * Sets a player's move speed for MoveTo Behaviors.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the move speed for.
     * @param moveSpeed - The move speed to set.
     */
    export function AISetMoveSpeed(player: Player, moveSpeed: MoveSpeed): void;

    /**
     * Sets a player's stance.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the stance for.
     * @param stance - The stance to set.
     */
    export function AISetStance(player: Player, stance: Stance): void;

    /**
     * Sets player's current target.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param aiPlayer - The AI player to set the target for.
     * @param targetPlayer - The target player to set.
     */
    export function AISetTarget(aiPlayer: Player, targetPlayer: Player): void;

    /**
     * Sets player's current target.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to set the target for.
     */
    export function AISetTarget(player: Player): void;

    /**
     * Gives a player the instruction to use a specific gadget on a target location or player.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to give the instruction to.
     * @param gadget - The gadget to use.
     * @param targetPos - The target position to use the gadget on.
     */
    export function AIStartUsingGadget(player: Player, gadget: OpenGadgets, targetPos: Vector): void;

    /**
     * Gives a player the instruction to use a specific gadget on a target location or player.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to give the instruction to.
     * @param gadget - The gadget to use.
     * @param targetPlayer - The target player to use the gadget on.
     */
    export function AIStartUsingGadget(player: Player, gadget: OpenGadgets, targetPlayer: Player): void;

    /**
     * Clears the player's gadget instructions.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     * @param player - The player to clear the gadget instructions for.
     */
    export function AIStopUsingGadget(player: Player): void;

    /**
     * Sets the damage multiplier from AI players to human players.
     * @param damageMultiplier - The damage multiplier to set.
     */
    export function SetAIToHumanDamageModifier(damageMultiplier: number): void;

    /**
     * Finds or initializes an Array on a provided Variable, and stores a provided value in that Array at the specified index.
     * Just like with Javascript arrays, you don't need to initialize the array or create an empty array first.
     * You can actually set the value at any index, even beyond its current length, and it will be valid.
     * @param arrayVariable - The variable to find or initialize the array on.
     * @param arrayIndex - The index to store the value at.
     * @param value - The value to store in the array.
     */
    export function SetVariableAtIndex(arrayVariable: Variable, arrayIndex: number, value: Any): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific team.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.GetTeam(1));
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param team - The team to play the sound for.
     */
    export function PlaySound(objectId: number, amplitude: number, team: Team): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific squad.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.GetSquad(1, 1));
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param squad - The squad to play the sound for.
     */
    export function PlaySound(objectId: number, amplitude: number, squad: Squad): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific player.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, somePlayer);
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param player - The player to play the sound for.
     */
    export function PlaySound(objectId: number, amplitude: number, player: Player): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for everyone.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0);
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     */
    export function PlaySound(objectId: number, amplitude: number): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific team.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.GetTeam(1));
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param team - The team to play the sound for.
     */
    export function PlaySound(sound: SFX, amplitude: number, team: Team): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific squad.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.GetSquad(1, 1));
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param squad - The squad to play the sound for.
     */
    export function PlaySound(sound: SFX, amplitude: number, squad: Squad): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific player.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, somePlayer);
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param player - The player to play the sound for.
     */
    export function PlaySound(sound: SFX, amplitude: number, player: Player): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for everyone.
     * Passing a 3D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0);
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     */
    export function PlaySound(sound: SFX, amplitude: number): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific team.
     * Passing a 2D sound to this function will fail silently.
     * Note: The team filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetTeam(1));
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     * @param team - The team to play the sound for.
     */
    export function PlaySound(
        sound: SFX,
        amplitude: number,
        location: Vector,
        attenuationRange: number,
        team: Team
    ): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific squad.
     * Passing a 2D sound to this function will fail silently.
     * Note: The squad filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetSquad(1, 1));
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     * @param squad - The squad to play the sound for.
     */
    export function PlaySound(
        sound: SFX,
        amplitude: number,
        location: Vector,
        attenuationRange: number,
        squad: Squad
    ): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific player.
     * Passing a 2D sound to this function will fail silently.
     * Note: The player filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0, somePlayer);
     * @param sound - The sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     * @param player - The player to play the sound for.
     */
    export function PlaySound(
        sound: SFX,
        amplitude: number,
        location: Vector,
        attenuationRange: number,
        player: Player
    ): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for everyone.
     * Passing a 2D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0);
     * @param sound - The sound object to play
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     */
    export function PlaySound(sound: SFX, amplitude: number, location: Vector, attenuationRange: number): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for everyone.
     * Passing a 2D sound to this function will fail silently.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0);
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     */
    export function PlaySound(objectId: number, amplitude: number, location: Vector, attenuationRange: number): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific team.
     * Passing a 2D sound to this function will fail silently.
     * Note: The team filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetTeam(1));
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     * @param team - The team to play the sound for.
     */
    export function PlaySound(
        objectId: number,
        amplitude: number,
        location: Vector,
        attenuationRange: number,
        team: Team
    ): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific squad.
     * Passing a 2D sound to this function will fail silently.
     * Note: The squad filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetSquad(1, 1));
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     * @param squad - The squad to play the sound for.
     */
    export function PlaySound(
        objectId: number,
        amplitude: number,
        location: Vector,
        attenuationRange: number,
        squad: Squad
    ): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific player.
     * Passing a 2D sound to this function will fail silently.
     * Note: The player filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0, somePlayer);
     * @param objectId - The id of the sound object to play.
     * @param amplitude - The amplitude of the sound.
     * @param location - The location to play the sound at.
     * @param attenuationRange - The attenuation range of the sound.
     * @param player - The player to play the sound for.
     */
    export function PlaySound(
        objectId: number,
        amplitude: number,
        location: Vector,
        attenuationRange: number,
        player: Player
    ): void;

    // Plays a voice-over event clip.
    export function PlayVO(objectId: number, event: VoiceOverEvents2D, flag: VoiceOverFlags): void;

    // Plays a voice-over event clip.
    export function PlayVO(objectId: number, event: VoiceOverEvents2D, flag: VoiceOverFlags, player: Player): void;

    // Plays a voice-over event clip.
    export function PlayVO(objectId: number, event: VoiceOverEvents2D, flag: VoiceOverFlags, squad: Squad): void;

    // Plays a voice-over event clip.
    export function PlayVO(objectId: number, event: VoiceOverEvents2D, flag: VoiceOverFlags, team: Team): void;

    // Plays a voice-over event clip.
    export function PlayVO(voiceOver: VO, event: VoiceOverEvents2D, flag: VoiceOverFlags): void;

    // Plays a voice-over event clip.
    export function PlayVO(voiceOver: VO, event: VoiceOverEvents2D, flag: VoiceOverFlags, player: Player): void;

    // Plays a voice-over event clip.
    export function PlayVO(voiceOver: VO, event: VoiceOverEvents2D, flag: VoiceOverFlags, squad: Squad): void;

    // Plays a voice-over event clip.
    export function PlayVO(voiceOver: VO, event: VoiceOverEvents2D, flag: VoiceOverFlags, team: Team): void;

    /**
     * Stops a given sound for a specific team.
     * @param objectId - The id of the sound object to stop.
     * @param team - The team to stop the sound for.
     */
    export function StopSound(objectId: number, team: Team): void;

    /**
     * Stops a given sound for a specific squad.
     * @param objectId - The id of the sound object to stop.
     * @param squad - The squad to stop the sound for.
     */
    export function StopSound(objectId: number, squad: Squad): void;

    /**
     * Stops a given sound for a specific player.
     * @param objectId - The id of the sound object to stop.
     * @param player - The player to stop the sound for.
     */
    export function StopSound(objectId: number, player: Player): void;

    /**
     * Stops a given sound for everyone.
     * @param objectId - The id of the sound object to stop.
     */
    export function StopSound(objectId: number): void;

    /**
     * Stops a given sound for a specific team.
     * @param sound - The sound object to stop.
     * @param team - The team to stop the sound for.
     */
    export function StopSound(sound: SFX, team: Team): void;

    /**
     * Stops a given sound for a specific squad.
     * @param sound - The sound object to stop.
     * @param squad - The squad to stop the sound for.
     */
    export function StopSound(sound: SFX, squad: Squad): void;

    /**
     * Stops a given sound for a specific player.
     * @param sound - The sound object to stop.
     * @param player - The player to stop the sound for.
     */
    export function StopSound(sound: SFX, player: Player): void;

    /**
     * Stops a given sound for everyone.
     * @param sound - The sound object to stop.
     */
    export function StopSound(sound: SFX): void;

    // Sets CameraType for all players. CameraIndex optional.
    export function SetCameraTypeForAll(cameraType: Cameras): void;

    // Sets CameraType for all players. CameraIndex optional.
    export function SetCameraTypeForAll(cameraType: Cameras, cameraIndex: number): void;

    // Sets CameraType for provided Player. CameraIndex optional.
    export function SetCameraTypeForPlayer(player: Player, cameraType: Cameras): void;

    // Sets CameraType for provided Player. CameraIndex optional.
    export function SetCameraTypeForPlayer(player: Player, cameraType: Cameras, cameraIndex: number): void;

    // Enables or disables a player-specific screen effect.
    export function EnableScreenEffect(player: Player, screenEffect: ScreenEffect, enable: boolean): void;

    // Enables or disables a player-specific screen effect.
    export function EnableScreenEffect(player: Player, screenEffect: ScreenEffects, enable: boolean): void;

    // Enables or disables a visual effect.
    export function EnableVFX(vfx: VFX, enable: boolean): void;

    // Move a VFX to a new coordinate. May have become redundant with the creation of the universal MoveObject action.
    export function MoveVFX(vfxID: VFX, position: Vector, rotation: Vector): void;

    // Changes the color of a visual effect.
    export function SetVFXColor(vfxID: VFX, color: Vector): void;

    // Changes the scale of a visual effect.
    export function SetVFXScale(vfxID: VFX, scale: number): void;

    // Changes the speed of a visual effect.
    export function SetVFXSpeed(vfxID: VFX, speed: number): void;

    // Cause an emplacement spawner to spawn an emplacement of the type it is currently set to.
    export function ForceEmplacementSpawnerSpawn(emplacementSpawner: EmplacementSpawner): void;

    // Enables or disables the feature to destroy emplacement left outside of the combat area.
    export function SetEmplacementSpawnerAbandonVehicleOutOfCombatArea(
        emplacementSpawner: EmplacementSpawner,
        enabled: boolean
    ): void;

    // Enables or disables the feature to destroy abandoned emplacements.
    export function SetEmplacementSpawnerApplyDamageToAbandonVehicle(
        emplacementSpawner: EmplacementSpawner,
        enabled: boolean
    ): void;

    // Enables or Disables automatic emplacement respawning from the emplacement spawner.
    export function SetEmplacementSpawnerAutoSpawn(emplacementSpawner: EmplacementSpawner, enabled: boolean): void;

    // Sets the distance from the nearest player for an emplacement to consider itself abandoned.
    export function SetEmplacementSpawnerKeepAliveAbandonRadius(
        emplacementSpawner: EmplacementSpawner,
        keepAliveAbandonedRadius: number
    ): void;

    // Sets the delay after destruction before an emplacement automatically respawn, if the feature is activated.
    export function SetEmplacementSpawnerRespawnTime(emplacementSpawner: EmplacementSpawner, respawnTime: number): void;

    // Sets the distance its enplacement spawner for an emplacement to consider itself abandoned.
    export function SetEmplacementSpawnerSpawnerRadius(
        emplacementSpawner: EmplacementSpawner,
        keepAliveSpawnerRadius: number
    ): void;

    // Sets the time left idle before an emplacement is considered abandoned.
    export function SetEmplacementSpawnerTimeUntilAbandon(
        emplacementSpawner: EmplacementSpawner,
        timeUntilAbandon: number
    ): void;

    /**
     * Sets the type of emplacement that will spawn from the emplacement spawner.
     * Note: This currently does not work and emplacement spawners will always spawn the `StationaryEmplacements.BGM71TOW`.
     * @param emplacementSpawner - The emplacement spawner to set the type of.
     * @param emplacementType - The type of emplacement to set.
     */
    export function SetEmplacementSpawnerType(
        emplacementSpawner: EmplacementSpawner,
        emplacementType: StationaryEmplacements
    ): void;

    // Force spawns all players in the deploy screen.
    export function DeployAllPlayers(): void;

    // Enables or disables spawning from the deploy screen for all players.
    export function EnableAllPlayerDeploy(enablePlayerDeploy: boolean): void;

    // Enables or disables the ability for a target player to deploy.
    export function EnablePlayerDeploy(player: Player, deployAllowed: boolean): void;

    // Overrides the time to redeploy for a target player. The redeploy time must be set to a value between 0 and 60 seconds.
    export function SetRedeployTime(player: Player, redeployTime: number): void;

    // Undeploys all players that are alive on the battlefield back to the deploy screen.
    export function UndeployAllPlayers(): void;

    /**
     * Undeploys a target player that is alive on the battlefield back to the deploy screen.
     * Note: This will not kill the player, so `mod.SoldierStateBool.IsAlive` will remain true and `mod.SoldierStateBool.IsDead` will remain false.
     * @param player - The player to undeploy.
     */
    export function UndeployPlayer(player: Player): void;

    // Ends the current gamemode and designates the provided Player or Team as the winner. The gamemode ends in draw if Team is set to 0.
    export function EndGameMode(player: Player): void;

    // Ends the current gamemode and designates the provided Player or Team as the winner. The gamemode ends in draw if Team is set to 0.
    export function EndGameMode(team: Team): void;

    // Pauses or unpauses the gamemode timer based on the provided boolean input.
    export function PauseGameModeTime(pauseTimer: boolean): void;

    /**
     * Resets the gamemode time to its starting value.
     * Note: This currently does not work and will not reset the gamemode time.
     */
    export function ResetGameModeTime(): void;

    // Signals the RingOfFire to start shrinking.
    export function RingOfFireStart(ringOfFire: RingOfFire): void;

    // Enables of disables friendly fire.
    export function SetFriendlyFire(enableFriendlyFire: boolean): void;

    // Sets the gamemode score of the provided Player or Team.
    export function SetGameModeScore(team: Team, newScore: number): void;

    // Sets the gamemode score of the provided Player or Team.
    export function SetGameModeScore(player: Player, newScore: number): void;

    // Sets the gamemode target score used to determine victory.
    export function SetGameModeTargetScore(newScore: number): void;

    // Sets the duration of the game in seconds.
    export function SetGameModeTimeLimit(newTimeLimit: number): void;

    // Sets a HQ to a specific Team.
    export function SetHQTeam(hq: HQ, teamID: Team): void;

    // Sets the damage dealt by the RingOfFire to players caught.
    export function SetRingOfFireDamageAmount(ringOfFireId: RingOfFire, ringOfFireDamageAmount: number): void;

    // Sets the duration the RingOfFire remains stable before Shrinking again.
    export function SetRingOfFireStableTime(ringOfFireId: RingOfFire, ringOfFireStableTime: number): void;

    // Using this command prevents anyone from joining this server. There is no way to undo this at the time.
    export function DisablePlayerJoin(): void;

    // Enables or disables an area trigger. This will prevent the specific Event from being fired.
    export function EnableAreaTrigger(areaTrigger: AreaTrigger, enable: boolean): void;

    // Enables or disables an interact point.
    export function EnableInteractPoint(interactPoint: InteractPoint, enable: boolean): void;

    // Enables or disables a spatial object.
    export function EnableSpatialObject(spatialObject: SpatialObject, enable: boolean): void;

    /**
     * Request the system to evaluate if a straight line between two points is interrupted or not.
     * Use `OnRayCastHit` and `OnRayCastMissed` events to get the result.
     * Note: The events do not provide any data to easily attribute the hit or miss to a specific cast ray.
     * @param player - The player to cast the ray from.
     * @param start - The start vector of the ray.
     * @param stop - The stop vector of the ray.
     */
    export function RayCast(player: Player, start: Vector, stop: Vector): void;

    /**
     * Request the system to evaluate if a straight line between two points is interrupted or not.
     * Use `OnRayCastHit` and `OnRayCastMissed` events to get the result.
     * Note: The events do not provide any data to easily attribute the hit or miss to a specific cast ray.
     * Note: The `OnRayCastHit` and `OnRayCastMissed` events will always provide a `player` argument, which is likely to be invalid if a ray is cast with this function.
     * @param start - The start vector of the ray.
     * @param stop - The stop vector of the ray.
     */
    export function RayCast(start: Vector, stop: Vector): void;

    // Sets the target player's team.
    export function SetTeam(player: Player, team: Team): void;

    // Spawns a weapon or gadget at a LootSpawner.
    export function SpawnLoot(lootSpawner: LootSpawner, ammo: AmmoTypes): void;

    // Spawns a weapon or gadget at a LootSpawner.
    export function SpawnLoot(lootSpawner: LootSpawner, weapon: Weapons): void;

    // Spawns a weapon or gadget at a LootSpawner.
    export function SpawnLoot(lootSpawner: LootSpawner, gadget: Gadgets): void;

    // Spawns a weapon or gadget at a LootSpawner.
    export function SpawnLoot(lootSpawner: LootSpawner, armor: ArmorTypes): void;

    // Switches players on TeamA and TeamB. Both teams must have the same Human and Bot count.
    export function SwitchTeams(teamA: Team, teamB: Team): void;

    // Removes all existing loot from the world
    export function UnspawnAllLoot(): void;

    // Unspawn an Object spawned using SpawnObject.
    export function UnspawnObject(obj: mod.Object): void;

    // Deals a provided amount of damage to a target player. Can optionally specify damage giver..
    export function DealDamage(player: Player, damageAmount: number): void;

    // Deals a provided amount of damage to a target player. Can optionally specify damage giver..
    export function DealDamage(player: Player, damageAmount: number, damageGiver: Player): void;

    // Deals a provided amount of damage to a target player. Can optionally specify damage giver..
    export function DealDamage(vehicle: Vehicle, damageAmount: number): void;

    // Revives a target player who is in the mandown state.
    export function ForceRevive(player: Player): void;

    // Instantly adds a given amount of health to the target player. Can optionally specify healing player.
    export function Heal(player: Player, healAmount: number): void;

    // Instantly adds a given amount of health to the target player. Can optionally specify healing player.
    export function Heal(player: Player, healAmount: number, giver: Player): void;

    // Instantly adds a given amount of health to the target player. Can optionally specify healing player.
    export function Heal(vehicle: Vehicle, repairAmount: number): void;

    // Kills a target player (skips the Mandown state).
    export function Kill(player: Player): void;

    // Kills a target player (skips the Mandown state).
    export function Kill(vehicle: Vehicle): void;

    // Applies an effect to a soldier based on a passed-in player.
    export function SetSoldierEffect(player: Player, soldierEffects: SoldierEffects, isEnabled: boolean): void;

    // Spots a target Player for all players for a specified duration of time (in seconds).
    export function SpotTarget(targetplayer: Player, duration: number, spotStatus: SpotStatus): void;

    // Spots a target Player for all players for a specified duration of time (in seconds).
    export function SpotTarget(
        targetPlayer: Player,
        spotterPlayer: Player,
        duration: number,
        spotStatus: SpotStatus
    ): void;

    // Spots a target Player for all players for a specified duration of time (in seconds).
    export function SpotTarget(targetplayer: Player, spotStatus: SpotStatus): void;

    // Spots a target Player for all players for a specified duration of time (in seconds).
    export function SpotTarget(targetPlayer: Player, spotterPlayer: Player, duration: number): void;

    // Spots a target Player for all players for a specified duration of time (in seconds).
    export function SpotTarget(targetplayer: Player, duration: number): void;

    // Gradually modifies the value of a Variable at a specified rate (value/second) until it reaches the provided limit.
    export function ChaseVariableAtRate(variable: Variable, limit: number, deltaPerSecond: number): void;

    // Gradually modifies the value of a Variable over time (in seconds). The variable's value will reach the limit at the end of the interval.
    export function ChaseVariableOverTime(variable: Variable, limit: number, durationSeconds: number): void;

    // Stops an in-progress tracking of a Variable from the ChaseVariableOverTime or ChaseVariableAtRate blocks, leaving it at its current value.
    export function StopChasingVariable(variable: Variable): void;

    // Enables or disables deploying on provided capture point for the team that owns it.
    export function EnableCapturePointDeploying(capturePoint: CapturePoint, enableDeploying: boolean): void;

    // Sets the capturing time for target capture point to the provided number.
    export function SetCapturePointCapturingTime(capturePoint: CapturePoint, capturingTime: number): void;

    // Sets the neutralization time for target capture point  to the provided number.
    export function SetCapturePointNeutralizationTime(capturePoint: CapturePoint, neutralizationTime: number): void;

    // Change the team controling a capture point.
    export function SetCapturePointOwner(capturePoint: CapturePoint, team: Team): void;

    // Sets the capture time multiplier for target capture point to the provided number.
    export function SetMaxCaptureMultiplier(capturePoint: CapturePoint, multiplier: number): void;

    /**
     * Enables or disables a headquater.
     * @param hq - The HQ object.
     * @param enable - Whether to enable or disable the HQ.
     */
    export function EnableHQ(hq: HQ, enable: boolean): void;

    /**
     * Enables or disables the provided objective.
     * @param objective - The objective object.
     * @param enable - Whether to enable or disable the objective.
     */
    export function EnableGameModeObjective(objective: CapturePoint | HQ | Sector | MCOM, enable: boolean): void;

    // Determines the time needed by MCOM.
    export function SetMCOMFuseTime(mCOM: MCOM, fuseTime: number): void;

    // Force a specific to deploy.
    export function DeployPlayer(player: Player): void;

    // Determines if players are spawned automatically or not.
    export function SetSpawnMode(spawnModes: SpawnModes): void;

    /**
     * Force Deploy a soldier from a specific spawn point.
     * @example
     * const spawnPoint = mod.SpawnObject(RuntimeSpawn_Common.PlayerSpawner, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SpawnPoint;
     * const spawnPointId = mod.GetObjId(spawnPoint);
     * mod.SpawnPlayerFromSpawnPoint(player, spawnPointId);
     * @param player - The player to spawn.
     * @param spawnPointId - The id of the spawn point to spawn the player from.
     */
    export function SpawnPlayerFromSpawnPoint(player: Player, spawnPointId: number): void;

    /**
     * Force Deploy a soldier from a specific spawn point.
     * @example
     * const spawnPoint = mod.SpawnObject(RuntimeSpawn_Common.PlayerSpawner, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SpawnPoint;
     * mod.SpawnPlayerFromSpawnPoint(player, spawnPoint);
     * @param player - The player to spawn.
     * @param spawnPoint - The spawn point to spawn the player from.
     */
    export function SpawnPlayerFromSpawnPoint(player: Player, spawnPoint: SpawnPoint): void;

    // Sets damage taken factor on player (Will be rounded to the nearest 5%). The value will be clamped between 0 - 200%.
    export function SetPlayerIncomingDamageFactor(player: Player, amount: number): void;

    /**
     * Teleports a target to a provided valid position facing a specified angle (in radians).
     * @param player - The player to teleport.
     * @param destination - The destination vector.
     * @param orientation - The orientation angle in radians.
     */
    export function Teleport(player: Player, destination: Vector, orientation: number): void;

    // Teleports a target to a provided valid position facing a specified angle (in radians).
    export function Teleport(vehicle: Vehicle, destination: Vector, orientation: number): void;

    // Enables or disables all keyboard and mouse inputs - such as movement, firing, and turning - for a target player.
    export function EnableAllInputRestrictions(player: Player, restrictInput: boolean): void;

    /**
     * Enables or disables a specified Input on a target player.
     * Note: This function currently does not seem to work. Either it can only toggle certain inputs, or it only works for the last input restricted/allowed.
     * @param player - The player to enable or disable the input for.
     * @param inputRestriction - The input to enable or disable.
     * @param restrictInput - Whether to restrict or allow the input.
     */
    export function EnableInputRestriction(
        player: Player,
        inputRestriction: RestrictedInputs,
        restrictInput: boolean
    ): void;

    // Adds an Attachment to a Weapon Package created through CreateWeaponPackage. Will replace existing Attachments of the same type
    export function AddAttachmentToWeaponPackage(attachment: WeaponAttachments, weaponPackage: WeaponPackage): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(player: Player, weapon: Weapons): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(player: Player, gadget: Gadgets): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(player: Player, weapon: Weapons, weaponPackage: WeaponPackage): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(player: Player, arg1: Weapons, desiredInventorySlot: InventorySlots): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(player: Player, gadget: Gadgets, desiredInventorySlot: InventorySlots): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(
        player: Player,
        weapon: Weapons,
        weaponPackage: WeaponPackage,
        desiredInventorySlots: InventorySlots
    ): void;

    // Adds a Weapon or Gadget to a Soldier's loadout.
    export function AddEquipment(player: Player, armor: ArmorTypes): void;

    // Forces the target player to switch to the provided inventory slot.
    export function ForceSwitchInventory(player: Player, inventorySlot: InventorySlots): void;

    // Removes a Weapon or Gadget from a Soldier's loadout.
    export function RemoveEquipment(player: Player, inventorySlot: InventorySlots): void;

    // Removes a Weapon or Gadget from a Soldier's loadout.
    export function RemoveEquipment(arg0: Player, weapon: Weapons): void;

    // Removes a Weapon or Gadget from a Soldier's loadout.
    export function RemoveEquipment(arg0: Player, gadget: Gadgets): void;

    // Sets the target player loaded ammo for the provided inventory slot.
    export function SetInventoryAmmo(player: Player, inventorySlots: InventorySlots, ammo: number): void;

    // Sets the target player magazine ammo for the provided inventory slot.
    export function SetInventoryMagazineAmmo(player: Player, inventorySlots: InventorySlots, magAmmo: number): void;

    // Puts the target player into the mandown state (unless mandown is disabled).
    export function ForceManDown(player: Player): void;

    /**
     * Instantly resupplies the target player using a provided `ResupplyType`.
     * @param player - The player to resupply.
     * @param resupplyType - The type of resupply to perform.
     */
    export function Resupply(player: Player, resupplyType: ResupplyTypes): void;

    // Sets the max health of a target player from 0 to 1000.  The value will be multiplied by the max health multiplier of the that target.
    export function SetPlayerMaxHealth(player: Player, maxHealth: number): void;

    // Sets a player's movement speed multiplier.
    export function SetPlayerMovementSpeedMultiplier(player: Player, multiplier: number): void;

    // Sets the target player to skip the mandown state and go directly to the deploy screen when killed.
    export function SkipManDown(player: Player, skipManDown: boolean): void;

    // Move the Object provided, Euler rotation optional
    export function MoveObject(object: mod.Object, positionDelta: Vector): void;

    // Move the Object provided, Euler rotation optional
    export function MoveObject(object: mod.Object, positionDelta: Vector, rotationDelta: Vector): void;

    // Moves the Object by the delta position and rotation over the time provided. Options to loop indefinitely and reverse
    export function MoveObjectOverTime(
        object: mod.Object,
        positionDelta: Vector,
        rotationDelta: Vector,
        timeInSeconds: number,
        shouldLoop: boolean,
        shouldReverse: boolean
    ): void;

    // Orbits the Object around the provided transform over time. Optional orbitAxis otherwise transform's up vector is used
    export function OrbitObjectOverTime(
        object: mod.Object,
        orbitTransform: Transform,
        timeInSeconds: number,
        radius: number,
        shouldLoop: boolean,
        shouldReverse: boolean,
        clockwise: boolean
    ): void;

    // Orbits the Object around the provided transform over time. Optional orbitAxis otherwise transform's up vector is used
    export function OrbitObjectOverTime(
        object: mod.Object,
        orbitTransform: Transform,
        timeInSeconds: number,
        radius: number,
        shouldLoop: boolean,
        shouldReverse: boolean,
        clockwise: boolean,
        orbitAxis: Vector
    ): void;

    // Rotate the Object provided using Euler angles
    export function RotateObject(object: mod.Object, rotationDelta: Vector): void;

    // Sets the transform of the Object provided
    export function SetObjectTransform(object: mod.Object, transform: Transform): void;

    // Sets the transform of the Object provided over the time provided. Options to loop indefinitely and reverse
    export function SetObjectTransformOverTime(
        object: mod.Object,
        transform: Transform,
        timeInSeconds: number,
        shouldLoop: boolean,
        shouldReverse: boolean
    ): void;

    // Stops the Over Time movement for the provided Object if one is active
    export function StopActiveMovementForObject(object: mod.Object): void;

    // Attaches a new UI Icon Widget to an object.
    export function AddUIIcon(
        parentObject: mod.Object,
        image: WorldIconImages,
        verticalOffset: number,
        iconColour: Vector,
        iconText: Message,
        visibility: Player | Team
    ): void;

    // Attaches a new UI Icon Widget to an object.
    export function AddUIIcon(
        parentObject: mod.Object,
        image: WorldIconImages,
        verticalOffset: number,
        iconColour: Vector,
        iconText: Message
    ): void;

    // Enables or disables showing the image of a world icon.
    export function EnableWorldIconImage(worldIcon: WorldIcon, enableImage: boolean): void;

    // Enables or disables showing the text appearing above a world icon.
    export function EnableWorldIconText(worldIcon: WorldIcon, enableText: boolean): void;

    // Removes a UI Icon Widget from an object.
    export function RemoveUIIcon(objectWithIcon: mod.Object): void;

    // Removes a UI Icon Widget from an object.
    export function RemoveUIIcon(objectWithIcon: mod.Object, visibility: Player | Team): void;

    // Changes the color of a world icon.
    export function SetWorldIconColor(worldIcon: WorldIcon, newColor: Vector): void;

    // Changes the image of a world icon.
    export function SetWorldIconImage(worldIcon: WorldIcon, newImage: WorldIconImages): void;

    // Restricts a world icon to be visible only to a specific Player or Team.
    export function SetWorldIconOwner(worldIcon: WorldIcon, newTeamOwner: Team): void;

    // Restricts a world icon to be visible only to a specific Player or Team.
    export function SetWorldIconOwner(worldIcon: WorldIcon, newPlayerOwner: Player): void;

    // Changes the location of a world icon.
    export function SetWorldIconPosition(worldIcon: WorldIcon, newPosition: Vector): void;

    // Changes the text appearing above a world icon.
    export function SetWorldIconText(worldIcon: WorldIcon, newText: Message): void;

    // Clears all custom notification slots for the given player.
    export function ClearAllCustomNotificationMessages(target: Player): void;

    // Clears the custom notification slot associated with the given slots for the specified team or player.
    export function ClearCustomNotificationMessage(slot: CustomNotificationSlots): void;

    // Clears the custom notification slot associated with the given slots for the specified team or player.
    export function ClearCustomNotificationMessage(slot: CustomNotificationSlots, target: Player): void;

    // Clears the custom notification slot associated with the given slots for the specified team or player.
    export function ClearCustomNotificationMessage(slot: CustomNotificationSlots, target: Team): void;

    // Display a custom notification in one of the slots for the specified team or player.
    export function DisplayCustomNotificationMessage(
        msg: Message,
        slot: CustomNotificationSlots,
        duration: number
    ): void;

    // Display a custom notification in one of the slots for the specified team or player.
    export function DisplayCustomNotificationMessage(
        msg: Message,
        slot: CustomNotificationSlots,
        duration: number,
        target: Player
    ): void;

    // Display a custom notification in one of the slots for the specified team or player.
    export function DisplayCustomNotificationMessage(
        msg: Message,
        slot: CustomNotificationSlots,
        duration: number,
        target: Team
    ): void;

    // Displays a message on the world log above the minimap for 6 seconds. If no target is provided, it will display the message to everyone.
    export function DisplayHighlightedWorldLogMessage(message: Message): void;

    // Displays a message on the world log above the minimap for 6 seconds. If no target is provided, it will display the message to everyone.
    export function DisplayHighlightedWorldLogMessage(message: Message, player: Player): void;

    // Displays a message on the world log above the minimap for 6 seconds. If no target is provided, it will display the message to everyone.
    export function DisplayHighlightedWorldLogMessage(message: Message, team: Team): void;

    /**
     * Displays a notification-type Message on the top-right of the screen for 6 seconds, for all players.
     * @param message - The message to display.
     */
    export function DisplayNotificationMessage(message: Message): void;

    /**
     * Displays a notification-type Message on the top-right of the screen for 6 seconds, for a specific player.
     * @param message - The message to display.
     * @param player - The player to display the message to.
     */
    export function DisplayNotificationMessage(message: Message, player: Player): void;

    /**
     * Displays a notification-type Message on the top-right of the screen for 6 seconds, for a specific team.
     * @param message - The message to display.
     * @param team - The team to display the message to.
     */
    export function DisplayNotificationMessage(message: Message, team: Team): void;

    // Displays a provided message as an error in the Admin menu.
    export function SendErrorReport(message: Message): void;

    // Sets the name displayed at the top of score of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnNames(
        column1Name: Message,
        column2Name: Message,
        column3Name: Message,
        column4Name: Message,
        column5Name: Message
    ): void;

    // Sets the name displayed at the top of score of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnNames(
        column1Name: Message,
        column2Name: Message,
        column3Name: Message,
        column4Name: Message
    ): void;

    // Sets the name displayed at the top of score of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnNames(column1Name: Message, column2Name: Message, column3Name: Message): void;

    // Sets the name displayed at the top of score of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnNames(column1Name: Message, column2Name: Message): void;

    // Sets the name displayed at the top of score of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnNames(column1Name: Message): void;

    // Sets the relative width of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnWidths(
        column1Width: number,
        column2Width: number,
        column3Width: number,
        column4Width: number,
        column5Width: number
    ): void;

    // Sets the relative width of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnWidths(
        column1Width: number,
        column2Width: number,
        column3Width: number,
        column4Width: number
    ): void;

    // Sets the relative width of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnWidths(column1Width: number, column2Width: number, column3Width: number): void;

    // Sets the relative width of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnWidths(column1Width: number, column2Width: number): void;

    // Sets the relative width of each column. Only works for custom scoreboards.
    export function SetScoreboardColumnWidths(column1Width: number): void;

    // Sets the name that appears in the top-left corner of the scoreboard
    export function SetScoreboardHeader(team1Name: Message, team2Name: Message): void;

    // Sets the name that appears in the top-left corner of the scoreboard
    export function SetScoreboardHeader(headerName: Message): void;

    // Sets the score in up to five distinct scores for the player. Only works for custom scoreboards.
    export function SetScoreboardPlayerValues(
        player: Player,
        column1Value: number,
        column2Value: number,
        column3Value: number,
        column4Value: number,
        column5Value: number
    ): void;

    // Sets the score in up to five distinct scores for the player. Only works for custom scoreboards.
    export function SetScoreboardPlayerValues(
        player: Player,
        column1Value: number,
        column2Value: number,
        column3Value: number,
        column4Value: number
    ): void;

    // Sets the score in up to five distinct scores for the player. Only works for custom scoreboards.
    export function SetScoreboardPlayerValues(
        player: Player,
        column1Value: number,
        column2Value: number,
        column3Value: number
    ): void;

    // Sets the score in up to five distinct scores for the player. Only works for custom scoreboards.
    export function SetScoreboardPlayerValues(player: Player, column1Value: number, column2Value: number): void;

    // Sets the score in up to five distinct scores for the player. Only works for custom scoreboards.
    export function SetScoreboardPlayerValues(player: Player, column1Value: number): void;

    // Sets which column the scoreboard is sorted on. Only works for custom scoreboards.
    export function SetScoreboardSorting(sortingColumn: number, reverseSorting: boolean): void;

    // Sets which column the scoreboard is sorted on. Only works for custom scoreboards.
    export function SetScoreboardSorting(sortingColumn: number): void;

    // Allows you to change the type of Scoreboard you want.
    export function SetScoreboardType(scoreboardType: ScoreboardType): void;

    // Creates a UI Button Widget.
    export function AddUIButton(name: string, position: Vector, size: Vector, anchor: UIAnchor): void;

    // Creates a UI Button Widget.
    export function AddUIButton(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        receiver: Player | Team
    ): void;

    // Creates a UI Button Widget.
    export function AddUIButton(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        buttonEnabled: boolean,
        baseColor: Vector,
        baseAlpha: number,
        disabledColor: Vector,
        disabledAlpha: number,
        pressedColor: Vector,
        pressedAlpha: number,
        hoverColor: Vector,
        hoverAlpha: number,
        focusedColor: Vector,
        focusedAlpha: number
    ): void;

    // Creates a UI Button Widget.
    export function AddUIButton(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        buttonEnabled: boolean,
        baseColor: Vector,
        baseAlpha: number,
        disabledColor: Vector,
        disabledAlpha: number,
        pressedColor: Vector,
        pressedAlpha: number,
        hoverColor: Vector,
        hoverAlpha: number,
        focusedColor: Vector,
        focusedAlpha: number,
        receiver: Player | Team
    ): void;

    // Creates a UI Button Widget.
    export function AddUIButton(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        buttonEnabled: boolean,
        baseColor: Vector,
        baseAlpha: number,
        disabledColor: Vector,
        disabledAlpha: number,
        pressedColor: Vector,
        pressedAlpha: number,
        hoverColor: Vector,
        hoverAlpha: number,
        focusedColor: Vector,
        focusedAlpha: number,
        depth: UIDepth
    ): void;

    // Creates a UI Button Widget.
    export function AddUIButton(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        buttonEnabled: boolean,
        baseColor: Vector,
        baseAlpha: number,
        disabledColor: Vector,
        disabledAlpha: number,
        pressedColor: Vector,
        pressedAlpha: number,
        hoverColor: Vector,
        hoverAlpha: number,
        focusedColor: Vector,
        focusedAlpha: number,
        depth: UIDepth,
        receiver: Player | Team
    ): void;

    // Creates a new UI Container Widget.
    export function AddUIContainer(name: string, position: Vector, size: Vector, anchor: UIAnchor): void;

    // Creates a new UI Container Widget.
    export function AddUIContainer(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        receiver: Player | Team
    ): void;

    // Creates a new UI Container Widget.
    export function AddUIContainer(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill
    ): void;

    // Creates a new UI Container Widget.
    export function AddUIContainer(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        receiver: Player | Team
    ): void;

    // Creates a new UI Container Widget.
    export function AddUIContainer(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        depth: UIDepth
    ): void;

    // Creates a new UI Container Widget.
    export function AddUIContainer(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        depth: UIDepth,
        receiver: Player | Team
    ): void;

    // Creates a new UI Image Widget based on a Gadget.
    export function AddUIGadgetImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        gadget: Gadgets,
        parent: UIWidget
    ): void;

    // Creates a new UI Image Widget based on a Gadget.
    export function AddUIGadgetImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        gadget: Gadgets,
        parent: UIWidget,
        visibility: Player | Team
    ): void;

    // Creates a new UI Image Widget.
    export function AddUIImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        imageType: UIImageType
    ): void;

    // Creates a new UI Image Widget.
    export function AddUIImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        imageType: UIImageType,
        receiver: Player | Team
    ): void;

    // Creates a new UI Image Widget.
    export function AddUIImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        imageType: UIImageType,
        imageColor: Vector,
        imageAlpha: number
    ): void;

    // Creates a new UI Image Widget.
    export function AddUIImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        imageType: UIImageType,
        imageColor: Vector,
        imageAlpha: number,
        receiver: Player | Team
    ): void;

    // Creates a new UI Image Widget.
    export function AddUIImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        imageType: UIImageType,
        imageColor: Vector,
        imageAlpha: number,
        depth: UIDepth
    ): void;

    // Creates a new UI Image Widget.
    export function AddUIImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        imageType: UIImageType,
        imageColor: Vector,
        imageAlpha: number,
        depth: UIDepth,
        receiver: Player | Team
    ): void;

    // Creates a new UI Text Widget.
    export function AddUIText(name: string, position: Vector, size: Vector, anchor: UIAnchor, message: Message): void;

    // Creates a new UI Text Widget.
    export function AddUIText(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        message: Message,
        receiver: Player | Team
    ): void;

    // Creates a new UI Text Widget.
    export function AddUIText(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        message: Message,
        textSize: number,
        textColor: Vector,
        textAlpha: number,
        textAnchor: UIAnchor
    ): void;

    // Creates a new UI Text Widget.
    export function AddUIText(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        message: Message,
        textSize: number,
        textColor: Vector,
        textAlpha: number,
        textAnchor: UIAnchor,
        receiver: Player | Team
    ): void;

    // Creates a new UI Text Widget.
    export function AddUIText(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        message: Message,
        textSize: number,
        textColor: Vector,
        textAlpha: number,
        textAnchor: UIAnchor,
        depth: UIDepth
    ): void;

    // Creates a new UI Text Widget.
    export function AddUIText(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        parent: UIWidget,
        visible: boolean,
        padding: number,
        bgColor: Vector,
        bgAlpha: number,
        bgFill: UIBgFill,
        message: Message,
        textSize: number,
        textColor: Vector,
        textAlpha: number,
        textAnchor: UIAnchor,
        depth: UIDepth,
        receiver: Player | Team
    ): void;

    // Creates a new UI Image Widget based on a Weapon and loadout.
    export function AddUIWeaponImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        weapon: Weapons,
        parent: UIWidget
    ): void;

    // Creates a new UI Image Widget based on a Weapon and loadout.
    export function AddUIWeaponImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        weapon: Weapons,
        parent: UIWidget,
        weaponPackage: WeaponPackage
    ): void;

    // Creates a new UI Image Widget based on a Weapon and loadout.
    export function AddUIWeaponImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        weapon: Weapons,
        parent: UIWidget,
        visibility: Player | Team
    ): void;

    // Creates a new UI Image Widget based on a Weapon and loadout.
    export function AddUIWeaponImage(
        name: string,
        position: Vector,
        size: Vector,
        anchor: UIAnchor,
        weapon: Weapons,
        parent: UIWidget,
        weaponPackage: WeaponPackage,
        visibility: Player | Team
    ): void;

    // Deletes all UI Widgets.
    export function DeleteAllUIWidgets(): void;

    // Deletes a particular UI Widget.
    export function DeleteUIWidget(widget: UIWidget): void;

    // Determines if UI Button Widgets can send events.
    export function EnableUIButtonEvent(widget: UIWidget, buttonEvent: UIButtonEvent, enabled: boolean): void;

    // Determines if UI Buttons can be interacted with.
    export function EnableUIInputMode(enabled: boolean): void;

    // Determines if UI Buttons can be interacted with.
    export function EnableUIInputMode(enabled: boolean, receiver: Player | Team): void;

    // Changes the base alpha (transparency) of an UI Button Widget.
    export function SetUIButtonAlphaBase(widget: UIWidget, value: number): void;

    // Changes the alpha (transparency) of an UI Button Widget when it is disabled.
    export function SetUIButtonAlphaDisabled(widget: UIWidget, value: number): void;

    // Changes the alpha (transparency) of an UI Button Widget when it is focused.
    export function SetUIButtonAlphaFocused(widget: UIWidget, value: number): void;

    // Changes the alpha (transparency) of an UI Button Widget when it is hovered.
    export function SetUIButtonAlphaHover(widget: UIWidget, value: number): void;

    // Changes the alpha (transparency) of an UI Button Widget when it is pressed.
    export function SetUIButtonAlphaPressed(widget: UIWidget, value: number): void;

    // Changes the base color of an UI Button Widget.
    export function SetUIButtonColorBase(widget: UIWidget, value: Vector): void;

    // Changes the color of an UI Button Widget when it is disabled.
    export function SetUIButtonColorDisabled(widget: UIWidget, value: Vector): void;

    // Changes the color of an UI Button Widget when it is focused.
    export function SetUIButtonColorFocused(widget: UIWidget, value: Vector): void;

    // Changes the color of an UI Button Widget when it is hovered.
    export function SetUIButtonColorHover(widget: UIWidget, value: Vector): void;

    // Changes the color of an UI Button Widget when it is pressed.
    export function SetUIButtonColorPressed(widget: UIWidget, value: Vector): void;

    // Determines if a specific UI Button Widget is enabled.
    export function SetUIButtonEnabled(widget: UIWidget, enabled: boolean): void;

    // Changes the alpha (transparency) of the image of an UI Image Widget.
    export function SetUIImageAlpha(widget: UIWidget, value: number): void;

    // Changes the color of the image of an UI Image Widget.
    export function SetUIImageColor(widget: UIWidget, value: Vector): void;

    // Changes the image of an UI Image Widget.
    export function SetUIImageType(widget: UIWidget, imageType: UIImageType): void;

    // Changes the alpha (transparency) of the text of an UI Text Widget.
    export function SetUITextAlpha(widget: UIWidget, value: number): void;

    // Changes the anchor of the text in an UI Text Widget.
    export function SetUITextAnchor(widget: UIWidget, anchor: UIAnchor): void;

    // Changes the font color of an UI Text Widget.
    export function SetUITextColor(widget: UIWidget, value: Vector): void;

    // Changes the message displayed by an UI Text Widget.
    export function SetUITextLabel(widget: UIWidget, message: Message): void;

    // Changes the font size of an UI Text Widget.
    export function SetUITextSize(widget: UIWidget, value: number): void;

    // Changes the anchor of an UI Widget.
    export function SetUIWidgetAnchor(widget: UIWidget, anchor: UIAnchor): void;

    // Changes the alpha (transparency) of an UI Widget.
    export function SetUIWidgetBgAlpha(widget: UIWidget, value: number): void;

    // Changes the background color of an UI Widget.
    export function SetUIWidgetBgColor(widget: UIWidget, value: Vector): void;

    // Changes the way the UI Widget's background is rendered.
    export function SetUIWidgetBgFill(widget: UIWidget, bgFill: UIBgFill): void;

    // Changes the draw order of an UI Widget.
    export function SetUIWidgetDepth(widget: UIWidget, depth: UIDepth): void;

    // Changes the name of an UI Widget.
    export function SetUIWidgetName(widget: UIWidget, name: string): void;

    // Changes the padding of an UI Widget.
    export function SetUIWidgetPadding(widget: UIWidget, value: number): void;

    // Changes the parent of an UI Widget.
    export function SetUIWidgetParent(widget: UIWidget, parent: UIWidget): void;

    // Changes the position of an UI Widget.
    export function SetUIWidgetPosition(widget: UIWidget, value: Vector): void;

    // Changes the size of an UI Widget.
    export function SetUIWidgetSize(widget: UIWidget, value: Vector): void;

    // Determines if an UI Widget is visible or not.
    export function SetUIWidgetVisible(widget: UIWidget, visible: boolean): void;

    // Cause a vehicle spawner to spawn one vehicle of the type it is currently set to.
    export function ForceVehicleSpawnerSpawn(vehicleSpawner: VehicleSpawner): void;

    // Sets a multiplier on the normal map value of how high vehicles can go before their engines stop applying an upwards force.
    export function SetMaxVehicleHeightLimitScale(heightScale: number): void;

    // Enables or disables the feature to destroy vehicles left outside of the combat area.
    export function SetVehicleSpawnerAbandonVehiclesOutOfCombatArea(
        vehicleSpawner: VehicleSpawner,
        enabled: boolean
    ): void;

    // Enables or disables the feature to destroy abandoned vehicles.
    export function SetVehicleSpawnerApplyDamageToAbandonVehicle(
        vehicleSpawner: VehicleSpawner,
        enabled: boolean
    ): void;

    // Enables or Disables automatic vehicle respawning from the vehicle spawner.
    export function SetVehicleSpawnerAutoSpawn(vehicleSpawner: VehicleSpawner, enabled: boolean): void;

    // Sets the distance from the nearest player for a vehicle to consider itself abandoned.
    export function SetVehicleSpawnerKeepAliveAbandonRadius(
        vehicleSpawner: VehicleSpawner,
        keepAliveAbandonedRadius: number
    ): void;

    // Sets the distance its vehicle spawner for a vehicle to consider itself abandoned.
    export function SetVehicleSpawnerKeepAliveSpawnerRadius(
        vehicleSpawner: VehicleSpawner,
        keepAliveSpawnerRadius: number
    ): void;

    // Sets the delay after destruction before a vehicle automatically respawn, if the feature is activated.
    export function SetVehicleSpawnerRespawnTime(vehicleSpawner: VehicleSpawner, respawnTime: number): void;

    // Sets the time left idle before a vehicle is considered abandoned.
    export function SetVehicleSpawnerTimeUntilAbandon(vehicleSpawner: VehicleSpawner, timeUntilAbandon: number): void;

    // Sets the type of vehicle that will spawn from the vehicle spawner.
    export function SetVehicleSpawnerVehicleType(vehicleSpawner: VehicleSpawner, vehicleType: VehicleList): void;

    // Multiplies the maximum health of target vehicle by the provided number greater than 0 and less than or equal to 4.
    export function SetVehicleMaxHealthMultiplier(vehicle: Vehicle, maxHealthMultiplier: number): void;

    // Forces the specified player to exit the target vehicle.
    export function ForcePlayerExitVehicle(player: Player, vehicle: Vehicle): void;

    // Forces the specified player to exit the target vehicle.
    export function ForcePlayerExitVehicle(vehicle: Vehicle): void;

    // Forces the specified player to exit the target vehicle.
    export function ForcePlayerExitVehicle(player: Player): void;

    // Forces the specified player into the target vehicle at the provided seat number.  If the provided seat is -1, that player will be forced into the first available seat.
    export function ForcePlayerToSeat(player: Player, vehicle: Vehicle, seatNumber: number): void;

    //------------------------
    // Get argument of subroutine at given index.
    export function GetArgument(subroutineArgIndex: number): Any;

    // Returns the value of a variable.
    export function GetVariable(variable: Variable): Any;

    // Returns the variable specified by a number.
    export function GlobalVariable(variableIndex: number): Variable;

    // Returns the variable specified by an object.
    export function ObjectVariable(ownerObject: mod.Object, variableIndex: number): Variable;

    // Returns the waypoint path object corresponding to the provided id.
    export function GetWaypointPath(waypointPathNumber: number): WaypointPath;

    // Returns a copy of an array with the provided value appended to the end.  Note: It is not possible for an array to contain arrays. Attempting to append an array to an array will concatenate them instead.
    export function AppendToArray(array: Array, value: Any): Array;

    // Returns a copy of the specified array containing only values from a specified index range.
    export function ArraySlice(array: Array, startIndex: number, endIndex: number): Array;

    // Returns the number of elements in the specified array.
    export function CountOf(array: Array): number;

    // Returns an initialized empty Array.
    export function EmptyArray(): Array;

    // Returns the first value of the specified Array.
    export function FirstOf(array: Array): Any;

    // Returns the value at the end of the specified Array.
    export function LastOf(array: Array): Any;

    // Returns a random value from the specified Array.
    export function RandomValueInArray(array: Array): Any;

    // Returns a copy of the specified Array with the values in a random order.
    export function RandomizedArray(array: Array): Array;

    // Returns a sorted version of the specified Array given a Number value to sort by (ascending). CurrentArrayElement can be utilized to represent each value in the Array. In the following example, CurrentArrayElement is used to represent each Player in AllPlayers. GetGameModeScore is used with CurrentArrayElement to return the score, used as a rank, to sort the Array in ascending order.
    export function SortedArray(array: Array, index: number): Array;

    // Returns the value found at a provided index of an array.
    export function ValueInArray(array: Array, index: number): Any;

    /**
     * Returns the SFX object corresponding to the provided id.
     * @param number - The id of the SFX to get.
     * @returns SFX The SFX object.
     */
    export function GetSFX(number: number): SFX;

    // Returns the VO object corresponding to the provided id.
    export function GetVO(number: number): VO;

    // Returns the screen effect object corresponding to the provided id.
    /**
     * @deprecated The method should not be used
     */
    export function GetScreenEffect(arg0: PortalEnum): ScreenEffect;

    // Returns the screen effect object corresponding to the provided id.
    /**
     * @deprecated The method should not be used
     */
    export function GetScreenEffect(number: number): ScreenEffect;

    // Returns the VFX object corresponding to the provided id.
    export function GetVFX(vfxNumber: number): VFX;

    // Returns the spawn point object corresponding to the provided id.
    export function GetSpawnPoint(number: number): SpawnPoint;

    // Returns the current gamemode score of the provided player or team.
    export function GetGameModeScore(player: Player): number;

    // Returns the current gamemode score of the provided player or team.
    export function GetGameModeScore(team: Team): number;

    // Returns the amount of time elapsed (seconds) in the current gamemode.
    export function GetMatchTimeElapsed(): number;

    // Returns the amount of time left (in seconds) in the current gamemode.
    export function GetMatchTimeRemaining(): number;

    // Returns the ring of fire object corresponding to the provided id.
    export function GetRingOfFire(number: number): RingOfFire;

    // Returns the time limit set for the gamemode (in seconds).
    export function GetRoundTime(): number;

    // Returns the gamemode target score needed for victory.
    export function GetTargetScore(): number;

    // Returns true if the provided team is using soldiers from the specified faction.
    export function IsFaction(team: Team, factions: Factions): boolean;

    // Returns the area trigger object corresponding to the provided id.
    export function GetAreaTrigger(areaTriggerNumber: number): AreaTrigger;

    // Returns the emplacement spawner object corresponding to the provided id.
    export function GetEmplacementSpawner(number: number): EmplacementSpawner;

    // Returns the interact point object corresponding to the provided id.
    export function GetInteractPoint(interactPointNumber: number): InteractPoint;

    // Returns the loot spawner object corresponding to the provided id.
    export function GetLootSpawner(number: number): LootSpawner;

    // Returns the id corresponding to the provided object.
    export function GetObjId(object: mod.Object): number;

    // Returns the spatial object corresponding to the provided id.
    export function GetSpatialObject(spatialObjectNumber: number): SpatialObject;

    // Returns the spawner object corresponding to the provided id.
    export function GetSpawner(number: number): Spawner;

    // Returns the vehicle spawner object corresponding to the provided id.
    export function GetVehicleSpawner(number: number): VehicleSpawner;

    /**
     * Returns true if the provided map is the name of the current map.
     * Note: This function currently does not work at all.
     * @param maps - The map to check.
     * @returns boolean True if the provided map is the name of the current map, false otherwise.
     */
    export function IsCurrentMap(maps: Maps): boolean;

    // Spawns an object at runtime. Returns an object id if the object supports it, otherwise -1
    export function SpawnObject(
        prefabEnum:
            | RuntimeSpawn_Common
            | RuntimeSpawn_Granite_ResidentialNorth
            | RuntimeSpawn_Abbasid
            | RuntimeSpawn_Aftermath
            | RuntimeSpawn_Badlands
            | RuntimeSpawn_Battery
            | RuntimeSpawn_Capstone
            | RuntimeSpawn_Dumbo
            | RuntimeSpawn_Eastwood
            | RuntimeSpawn_FireStorm
            | RuntimeSpawn_Limestone
            | RuntimeSpawn_Outskirts
            | RuntimeSpawn_Tungsten
            | RuntimeSpawn_Granite_Downtown
            | RuntimeSpawn_Granite_Marina
            | RuntimeSpawn_Granite_MilitaryRnD
            | RuntimeSpawn_Granite_MilitaryStorage
            | RuntimeSpawn_Granite_TechCenter
            | RuntimeSpawn_Sand,
        position: Vector,
        rotation: Vector,
        scale: Vector
    ): Any;

    // Spawns an object at runtime. Returns an object id if the object supports it, otherwise -1
    export function SpawnObject(
        prefabEnum:
            | RuntimeSpawn_Common
            | RuntimeSpawn_Granite_ResidentialNorth
            | RuntimeSpawn_Abbasid
            | RuntimeSpawn_Aftermath
            | RuntimeSpawn_Badlands
            | RuntimeSpawn_Battery
            | RuntimeSpawn_Capstone
            | RuntimeSpawn_Dumbo
            | RuntimeSpawn_Eastwood
            | RuntimeSpawn_FireStorm
            | RuntimeSpawn_Limestone
            | RuntimeSpawn_Outskirts
            | RuntimeSpawn_Tungsten
            | RuntimeSpawn_Granite_Downtown
            | RuntimeSpawn_Granite_Marina
            | RuntimeSpawn_Granite_MilitaryRnD
            | RuntimeSpawn_Granite_MilitaryStorage
            | RuntimeSpawn_Granite_TechCenter
            | RuntimeSpawn_Sand,
        position: Vector,
        rotation: Vector
    ): Any;

    /**
     * Returns a boolean value based on whether both of the provided inputs return true.
     * Note: This does not short-circuit. All inputs will be evaluated if they are derived from function calls.
     * @param boolean0 - The first boolean value.
     * @param boolean1 - The second boolean value.
     * @returns boolean True if both boolean values are true, false otherwise.
     */
    export function And(boolean0: boolean, boolean1: boolean): boolean;

    // Returns a boolean indicating if two values are equal to each other.
    export function Equals(left: Any, right: Any): boolean;

    // Returns a boolean indicating if the 1st provided value is greater than the 2nd provided value.
    export function GreaterThan(number0: number, number1: number): boolean;

    // Returns a boolean indicating if the 1st provided value is greater than the 2nd provided value.
    export function GreaterThanEqualTo(left: number, right: number): boolean;

    /**
     * Tertiary operator. If condition is true, return the first value. Otherwise return the second value.
     * Note: Both `trueValue` and `falseValue` will be evaluated if they are derived from function calls.
     * @param condition - The condition to evaluate.
     * @param trueValue - The value to return if the condition is true.
     * @param falseValue - The value to return if the condition is false.
     * @returns Any The value of the condition.
     */
    export function IfThenElse(condition: boolean, trueValue: Any, falseValue: Any): Any;

    // Returns true if the provided value is equal to the specified type.
    export function IsType(value: Any, type: Types): boolean;

    // Returns a boolean indicating if the 1st provided value is less than the 2nd provided value.
    export function LessThan(left: number, right: number): boolean;

    // Returns a boolean indicating if the 1st provided value is less than or equal to the 2nd provided value.
    export function LessThanEqualTo(left: number, right: number): boolean;

    // Return a boolean of the opposite value of the boolean input.
    export function Not(boolean: boolean): boolean;

    // Returns a boolean indicating if two values are not equal to each other.
    export function NotEqualTo(left: Any, right: Any): boolean;

    /**
     * Returns a boolean based on whether either of the two inputs are true.
     * Note: This does not short-circuit. All inputs will be evaluated if they are derived from function calls.
     * @param boolean0 - The first boolean value.
     * @param boolean1 - The second boolean value.
     * @returns boolean True if either boolean value is true, false otherwise.
     */
    export function Or(boolean0: boolean, boolean1: boolean): boolean;

    // Returns true if the provided boolean inputs return different values.
    export function Xor(boolean0: boolean, boolean1: boolean): boolean;

    /**
     * Returns a string containing the concatenation of two strings.
     * Note: This is currently broken and will not return anything valid.
     * @param string0 - The first string.
     * @param string1 - The second string.
     * @returns string The concatenated string.
     */
    export function Concat(string0: string, string1: string): string;

    // Returns the unsigned value of the provided number input.
    export function AbsoluteValue(number: number): number;

    // Returns the sum of two numbers or two vector values.
    export function Add(number0: number, number1: number): number;

    // Returns the sum of two numbers or two vector values.
    export function Add(vector0: Vector, vector1: Vector): Vector;

    // Returns the angle (in degrees) between two provided vector values.
    export function AngleBetweenVectors(vector0: Vector, vector1: Vector): number;

    // Returns the difference between two angles (in degrees).
    export function AngleDifference(number0: number, number1: number): number;

    // Returns the inverse cosine of a provided number value in degrees.
    export function ArccosineInDegrees(number: number): number;

    // Returns the inverse cosine of a provided number value in radians.
    export function ArccosineInRadians(number: number): number;

    // Returns the inverse sine of a provided number value in degrees.
    export function ArcsineInDegrees(number: number): number;

    // Returns the inverse sine of a provided number value in radians.
    export function ArcsineInRadians(number: number): number;

    // Returns the inverse tangent of a provided number value in degrees.
    export function ArctangentInDegrees(number: number): number;

    // Returns the inverse tangent of a provided number value in radians.
    export function ArctangentInRadians(number: number): number;

    // Returns the value rounded up to the nearest integer.
    export function Ceiling(number: number): number;

    // Returns the cosine value of a specified angle in degrees.
    export function CosineFromDegrees(number: number): number;

    // Returns the cosine value of a specified angle in radians.
    export function CosineFromRadians(number: number): number;

    // Creates a Transform from Position and Rotation Vectors
    export function CreateTransform(position: Vector, rotation: Vector): Transform;

    /**
     * Returns a vector composed of three provided 'X' (left), 'Y' (up), and 'Z' (forward) values.
     * Note: Eastwards is positive, and Northbound is negative.
     * @param number0 - The X value (left).
     * @param number1 - The Y value (up).
     * @param number2 - The Z value (forward).
     * @returns Vector The created vector.
     */
    export function CreateVector(number0: number, number1: number, number2: number): Vector;

    // Returns the cross product between two vector values. If the two vector inputs are parallel, the result will be zero.
    export function CrossProduct(vector0: Vector, vector1: Vector): Vector;

    // Returns a value in radians from a specified value in degrees.
    export function DegreesToRadians(number: number): number;

    // Returns a directional vector from the provided horizontal (yaw) and vertical (pitch) angles (in degrees).
    export function DirectionFromAngles(number0: number, number1: number): Vector;

    // Returns the direction, or normalized vector, from a starting position and ending position.
    export function DirectionTowards(vector0: Vector, vector1: Vector): Vector;

    // Returns the distance between a starting position and ending position.
    export function DistanceBetween(vector0: Vector, vector1: Vector): number;

    // Returns the ratio between two number values or a vector and number value. A vector divided by a number will yield a scaled vector.
    export function Divide(number0: number, number1: number): number;

    // Returns the ratio between two number values or a vector and number value. A vector divided by a number will yield a scaled vector.
    export function Divide(vector: Vector, number: number): Vector;

    // Returns the dot product between two vector values. If the two values are orthogonal to each other, the result will be zero.
    export function DotProduct(vector0: Vector, vector1: Vector): number;

    // Returns the value rounded down to the nearest integer.
    export function Floor(number: number): number;

    // Returns the greater of the two number values provided.
    export function Max(number0: number, number1: number): number;

    // Returns the remainder of the 1st provided value divided by the 2nd provided value.
    export function Modulo(number0: number, number1: number): number;

    // Returns the product of two number values or the product of a vector and number value.
    export function Multiply(number0: number, number1: number): number;

    // Returns the product of two number values or the product of a vector and number value.
    export function Multiply(vector: Vector, number: number): Vector;

    // Returns a unit-length normalization of a vector.
    export function Normalize(vector: Vector): Vector;

    // Returns the constant value 3.14159
    export function Pi(): number;

    // Returns a value in degrees from a specified value in radians.
    export function RadiansToDegrees(number: number): number;

    // Returns the 1st provided value raised to the power of the 2nd provided value.
    export function RaiseToPower(number0: number, number1: number): number;

    // Returns a random number between a specified minimum and maximum value (inclusive).
    export function RandomReal(number0: number, number1: number): number;

    // Returns a whole number rounded from the input value. The value rounds up if the decimal of the number is greater than or equal to 0.5, and rounds down if it is less than 0.5.
    export function RoundToInteger(number: number): number;

    // Returns the sine value of a specified angle in degrees.
    export function SineFromDegrees(number: number): number;

    // Returns the sine value of a specified angle in radians.
    export function SineFromRadians(number: number): number;

    // Returns the square root of a provided number value.
    export function SquareRoot(number: number): number;

    // Returns the difference between two number values or two vector values.
    export function Subtract(number0: number, number1: number): number;

    /**
     * Returns the difference between two number values or two vector values.
     * Note: This is currently broken and will return the first vector with components rounded up.
     * @param vector0 - The first vector.
     * @param vector1 - The second vector.
     * @returns Vector The difference between the two vectors.
     */
    export function Subtract(vector0: Vector, vector1: Vector): Vector;

    // Returns the tangent value of a specified angle in degrees.
    export function TangentFromDegrees(number: number): number;

    // Returns the tangent value of a specified angle in radians.
    export function TangentFromRadians(number: number): number;

    // Returns an array of all capture points within a game.
    export function AllCapturePoints(): Array;

    /**
     * Returns the capture point corresponding to the provided id.
     * @param id - The ObjId of the CapturePoint.
     * @returns CapturePoint The CapturePoint object.
     */
    export function GetCapturePoint(id: number): CapturePoint;

    // Returns a number from zero to one corresponding to the capture progress of the provided capture point.
    export function GetCaptureProgress(capturePoint: CapturePoint): number;

    // Returns the current owner team corresponding to the provided capture point.
    export function GetCurrentOwnerTeam(capturePoint: CapturePoint): Team;

    // Returns the team of the team currently capturing the provided capture point.
    export function GetOwnerProgressTeam(capturePoint: CapturePoint): Team;

    // Returns a array of all players within the boundaries of a provided capture point.
    export function GetPlayersOnPoint(capturePoint: CapturePoint): Array;

    // Returns the previous owner team corresponding to the provided capture point.
    export function GetPreviousOwnerTeam(capturePoint: CapturePoint): Team;

    /**
     * Returns the HQ object corresponding to the provided id.
     * Note that HQ_PlayerSpawner has to be placed in Godot scene, assigned an ObjId and a HQArea(CollisionPolygon3D).
     * @param number - The ObjId of the HQ_PlayerSpawner.
     * @returns HQ The HQ object.
     */
    export function GetHQ(number: number): HQ;

    // Returns the MCOM object corresponding to the provided id.
    export function GetMCOM(number: number): MCOM;

    // Returns the sector object corresponding to the provided id.
    export function GetSector(number: number): Sector;

    // Returns an array of all players within a game.
    export function AllPlayers(): Array;

    /**
     * Returns the closest alive player to a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     * @param vector - The position to find the closest player to.
     * @returns Player The closest player.
     */
    export function ClosestPlayerTo(vector: Vector): Player;

    /**
     * Returns the closest alive player, on a specific team, to a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     * @param vector - The position to find the closest player to.
     * @param team - The team to filter the players by.
     * @returns Player The closest player.
     */
    export function ClosestPlayerTo(vector: Vector, team: Team): Player;

    /**
     * Returns the farthest alive player from a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     * @param vector - The position to find the farthest player from.
     * @returns Player The farthest player.
     */
    export function FarthestPlayerFrom(vector: Vector): Player;

    /**
     * Returns the farthest alive player, on a specific team, from a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     * @param vector - The position to find the farthest player from.
     * @param team - The team to filter the players by.
     * @returns Player The farthest player.
     */
    export function FarthestPlayerFrom(vector: Vector, team: Team): Player;

    // Returns the total amount of deaths for the target player.
    export function GetPlayerDeaths(player: Player): number;

    // Returns the total amount of kills for the target player.
    export function GetPlayerKills(player: Player): number;

    // Returns the squad object corresponding to the provided player, or team/squad id.
    export function GetSquad(player: Player): Squad;

    // Returns the squad object corresponding to the provided player, or team/squad id.
    export function GetSquad(teamIdNumber: number, squadIdNumber: number): Squad;

    /**
     * Returns the team object of the specified player.
     * @param player - The player to get the team of.
     * @returns Team The team object.
     */
    export function GetTeam(player: Player): Team;

    /**
     * Returns the team object of the provided team id number.
     * Team 0 is neutral/none, while all other team values up to 32 are valid.
     * @param teamId - The id of the team to get.
     * @returns Team The team object.
     */
    export function GetTeam(teamId: number): Team;

    // Returns true if the provided player is valid.
    export function IsPlayerValid(player: Player): boolean;

    // Creates and returns a new weapon package.
    export function CreateNewWeaponPackage(): WeaponPackage;

    // Returns a boolean indicating if the victim was damaged by the provided damage type.
    export function EventDamageTypeCompare(damageType: DamageType, playerDamageTypes: PlayerDamageTypes): boolean;

    // Returns a boolean indicating if the victim died by the provided death type.
    export function EventDeathTypeCompare(deathType: DeathType, playerDeathTypes: PlayerDeathTypes): boolean;

    // Returns the target player loaded ammo of the provided inventory slots.
    export function GetInventoryAmmo(player: Player, inventorySlots: InventorySlots): number;

    // Returns the target player magazine ammo of the provided inventory slots.
    export function GetInventoryMagazineAmmo(player: Player, inventorySlots: InventorySlots): number;

    // Returns the value of the target player state.
    export function GetSoldierState(player: Player, soldierStateNumber: SoldierStateNumber): number;

    // Returns the value of the target player state.
    export function GetSoldierState(player: Player, soldierStateBool: SoldierStateBool): boolean;

    // Returns the value of the target player state.
    export function GetSoldierState(player: Player, soldierStateVector: SoldierStateVector): Vector;

    // Returns a boolean indicating if the provided player has the specified ability.
    export function HasEquipment(player: Player, weapon: Weapons): boolean;

    // Returns a boolean indicating if the provided player has the specified ability.
    export function HasEquipment(player: Player, gadget: Gadgets): boolean;

    // Returns true whether or not the active inventory slot of the target player is the provided inventory slots.
    export function IsInventorySlotActive(player: Player, inventorySlots: InventorySlots): boolean;

    // Returns true if the provided player is using the specified class.
    export function IsSoldierClass(player: Player, soldierClass: SoldierClass): boolean;

    // Returns the backward directional vector of (0, 0, 1).
    export function BackwardVector(): Vector;

    // Returns the downward directional vector of (0, -1, 0).
    export function DownVector(): Vector;

    // Returns the forward directional vector of (0, 0, -1).
    export function ForwardVector(): Vector;

    // Returns the position vector of the provided object.
    export function GetObjectPosition(object: mod.Object): Vector;

    // Returns the rotation vector of the provided object.
    export function GetObjectRotation(object: mod.Object): Vector;

    // Returns the transform vector of the provided object.
    export function GetObjectTransform(object: mod.Object): Transform;

    // Returns the leftward directional vector of (-1, 0, 0).
    export function LeftVector(): Vector;

    // Converts the provided world position to the corresponding position in local player space.
    export function LocalPositionOf(vector: Vector, player: Player): Vector;

    // Converts the provided world vector to the corresponding vector in local player space.
    export function LocalVectorOf(vector: Vector, player: Player): Vector;

    // Returns the rightward directional vector of (1, 0, 0).
    export function RightVector(): Vector;

    // Returns the upward directional vector of (0, 1, 0).
    export function UpVector(): Vector;

    // Returns the displacement vector from a starting position to an ending position.
    export function VectorTowards(vector0: Vector, vector1: Vector): Vector;

    // Converts the provided local player position to the corresponding position in the world space.
    export function WorldPositionOf(vector: Vector, player: Player): Vector;

    // Converts the provided local player vector to the corresponding vector in the world space.
    export function WorldVectorOf(vector: Vector, player: Player): Vector;

    // Returns the 'X' component of a provided vector.
    export function XComponentOf(vector: Vector): number;

    // Returns the 'Y' component of a provided vector.
    export function YComponentOf(vector: Vector): number;

    // Returns the 'Z' component of a provided vector.
    export function ZComponentOf(vector: Vector): number;

    // Returns the world icon object corresponding to the provided id.
    export function GetWorldIcon(worldIconNumber: number): WorldIcon;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player, or format string (which can take up to 3 format items).
     * All strings passed as arguments must be found in the `strings.json` which is injected as `mod.stringkeys`.
     * @example
     * // strings.json has a key "Hello" with the value "Hello {}! I am {}, player number {}." and a key "World" with the value "World".
     * const message = mod.Message(mod.stringkeys.Hello, mod.stringkeys.World, player, mod.GetObjId(player));
     * @param msg - The message string, number, or player object.
     * @param msgArg0 - In the case where `msg` is a message string with `{}` placeholders, this is the first argument to replace the first placeholder.
     * @param msgArg1 - In the case where `msg` is a message string with `{}` placeholders, this is the second argument to replace the second placeholder.
     * @param msgArg2 - In the case where `msg` is a message string with `{}` placeholders, this is the third argument to replace the third placeholder.
     * @returns Message The constructed opaque message object.
     */
    export function Message(
        msg: string | number | Player,
        msgArg0: string | number | Player,
        msgArg1: string | number | Player,
        msgArg2: string | number | Player
    ): Message;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player, or format string (which can take up to 2 format items).
     * All strings passed as arguments must be found in the `strings.json` which is injected as `mod.stringkeys`.
     * @example
     * // strings.json has a key "Hello" with the value "Hello {}! I am {}." and a key "World" with the value "World".
     * const message = mod.Message(mod.stringkeys.Hello, mod.stringkeys.World, player);
     * @param msg - The message string, number, or player object.
     * @param msgArg0 - In the case where `msg` is a message string with `{}` placeholders, this is the first argument to replace the first placeholder.
     * @param msgArg1 - In the case where `msg` is a message string with `{}` placeholders, this is the second argument to replace the second placeholder.
     * @returns Message The constructed opaque message object.
     */
    export function Message(
        msg: string | number | Player,
        msgArg0: string | number | Player,
        msgArg1: string | number | Player
    ): Message;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player, or format string (which can take up to 1 format items).
     * All strings passed as arguments must be found in the `strings.json` which is injected as `mod.stringkeys`.
     * @example
     * // strings.json has a key "Hello" with the value "Hello {}!" and a key "World" with the value "World".
     * const message = mod.Message(mod.stringkeys.Hello, mod.stringkeys.World);
     * @param msg - The message string, number, or player object.
     * @param msgArg0 - In the case where `msg` is a message string with `{}` placeholders, this is the first argument to replace the first placeholder.
     * @returns Message The constructed opaque message object.
     */
    export function Message(msg: string | number | Player, msgArg0: string | number | Player): Message;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player.
     * All strings passed as arguments must be found in the `strings.json` which is injected as `mod.stringkeys`.
     * @example
     * // strings.json has a key "Hello" with the value "Hello!".
     * const message = mod.Message(mod.stringkeys.Hello);
     * @param msg - The message string, number, or player object.
     * @returns Message The constructed opaque message object.
     */
    export function Message(msg: string | number | Player): Message;

    // Returns the UI Widget matching the specified name.
    export function FindUIWidgetWithName(name: string, searchRoot: UIWidget): UIWidget;

    // Returns the UI Widget matching the specified name.
    export function FindUIWidgetWithName(name: string): Any;

    // Returns a number representing the button base alpha of the specified UI Widget.
    export function GetUIButtonAlphaBase(widget: UIWidget): number;

    // Returns a number representing the button disabled alpha of the specified UI Widget.
    export function GetUIButtonAlphaDisabled(widget: UIWidget): number;

    // Returns a number representing the button focused alpha of the specified UI Widget.
    export function GetUIButtonAlphaFocused(widget: UIWidget): number;

    // Returns a number representing the button hover alpha of the specified UI Widget.
    export function GetUIButtonAlphaHover(widget: UIWidget): number;

    // Returns a number representing the button pressed alpha of the specified UI Widget.
    export function GetUIButtonAlphaPressed(widget: UIWidget): number;

    // Returns a vector representing the button base color of the specified UI Widget.
    export function GetUIButtonColorBase(widget: UIWidget): Vector;

    // Returns a vector representing the button disabled color of the specified UI Widget.
    export function GetUIButtonColorDisabled(widget: UIWidget): Vector;

    // Returns a vector representing the button focused color of the specified UI Widget.
    export function GetUIButtonColorFocused(widget: UIWidget): Vector;

    // Returns a vector representing the button hover color of the specified UI Widget.
    export function GetUIButtonColorHover(widget: UIWidget): Vector;

    // Returns a vector representing the button pressed color of the specified UI Widget.
    export function GetUIButtonColorPressed(widget: UIWidget): Vector;

    // Returns a boolean indicating the button enabled status of the specified UI Widget.
    export function GetUIButtonEnabled(widget: UIWidget): boolean;

    // Returns a number representing the image alpha of the specified UI Widget.
    export function GetUIImageAlpha(widget: UIWidget): number;

    // Returns a vector representing the image color of the specified UI Widget.
    export function GetUIImageColor(widget: UIWidget): Vector;

    // Returns an enum value representing the image type of the specified UI Widget.
    export function GetUIImageType(widget: UIWidget): UIImageType;

    // Returns the UI Root as a UI Widget.
    export function GetUIRoot(): UIWidget;

    // Returns a number representing the text alpha of the specified UI Widget.
    export function GetUITextAlpha(widget: UIWidget): number;

    // Returns an enum value representing the text anchor of the specified UI Widget.
    export function GetUITextAnchor(widget: UIWidget): UIAnchor;

    // Returns a vector representing the text color of the specified UI Widget.
    export function GetUITextColor(widget: UIWidget): Vector;

    // Returns a number representing the text size of the specified UI Widget.
    export function GetUITextSize(widget: UIWidget): number;

    // Returns an enum value representing the anchor location of the specified UI Widget.
    export function GetUIWidgetAnchor(widget: UIWidget): UIAnchor;

    // Returns the background alpha value of the specified UI Widget.
    export function GetUIWidgetBgAlpha(widget: UIWidget): number;

    // Returns the background color vector of the specified UI Widget.
    export function GetUIWidgetBgColor(widget: UIWidget): Vector;

    // Returns an enum value representing the background fill of the specified UI Widget.
    export function GetUIWidgetBgFill(widget: UIWidget): UIBgFill;

    // Returns an enum value representing the depth of the specified UI Widget.
    export function GetUIWidgetDepth(widget: UIWidget): UIDepth;

    // Returns a string containing the name of the specified UI Widget.
    export function GetUIWidgetName(widget: UIWidget): string;

    // Returns a number representing the padding value of the specified UI Widget.
    export function GetUIWidgetPadding(widget: UIWidget): number;

    // Returns the Parent UI Widget of the specified UI Widget.
    export function GetUIWidgetParent(widget: UIWidget): UIWidget;

    // Returns the positional vector of the specified UI Widget.
    export function GetUIWidgetPosition(widget: UIWidget): Vector;

    // Returns the scale vector of the specified UI Widget.
    export function GetUIWidgetSize(widget: UIWidget): Vector;

    // Returns a boolean representing the visible state of the specified UI Widget.
    export function GetUIWidgetVisible(widget: UIWidget): boolean;

    // Returns a boolean indicating if the UI Widget exists.
    export function HasUIWidgetWithName(name: string, searchRoot: UIWidget): boolean;

    // Returns a boolean indicating if the UI Widget exists.
    export function HasUIWidgetWithName(name: string): boolean;

    // Returns an array of all vehicles within a game.
    export function AllVehicles(): Array;

    // Returns a boolean indicating if the target vehicle has the same name as the provided vehicle or if it is the same type as the provided vehicle type.
    export function CompareVehicleName(vehicle: Vehicle, vehicleList: VehicleList): boolean;

    // Returns the vehicle used by a player.
    export function GetVehicleFromPlayer(player: Player): Vehicle;

    // Returns the number of seats in a vehicle.
    export function GetVehicleSeatCount(vehicle: Vehicle): number;

    // Returns the value of the target vehicle state.
    export function GetVehicleState(vehicle: Vehicle, vehicleStateVector: VehicleStateVector): Vector;

    // Returns the team of the provided vehicle. Note: A vehicle that is not occupied will have a neutral team.
    export function GetVehicleTeam(vehicle: Vehicle): Team;

    // Returns a boolean indicating if the target vehicle is a occupied by a player.
    export function IsVehicleOccupied(vehicle: Vehicle): boolean;

    // Returns a boolean indicating if the target seat index number of target vehicle is a occupied by a player.
    export function IsVehicleSeatOccupied(vehicle: Vehicle, number: number): boolean;

    // Returns a array of all players inside a provided vehicle
    export function GetAllPlayersInVehicle(vehicle: Vehicle): Array;

    // Returns the player currently occupying the provided seat index number of the provided vehicle. Note: If no players are in the vehicle seat when this block is called, the returned player will be invalid.
    export function GetPlayerFromVehicleSeat(vehicle: Vehicle, number: number): Player;

    // Returns the seat index number for the target player if they are in a vehicle, otherwise returns -1.
    export function GetPlayerVehicleSeat(player: Player): number;
}
