/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="../original/index.d.ts" />

/// <reference path="./types.d.ts" />
/// <reference path="./enums.d.ts" />
/// <reference path="./event-handler-signatures.d.ts" />
/* eslint-enable @typescript-eslint/triple-slash-reference */

// TODO: Z value in UIWIdget position is useless. Z-Index is most recent created on top, within container.

declare namespace documentedMod {
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
     * Unloads a music package that is already loaded.
     * This is almost never necessary. In official Battlefield modes, music is always loaded at the start, and it is never unloaded mid-match.
     * @param musicPackage - The music package to unload.
     */
    export function UnloadMusic(musicPackage: MusicPackages): void;

    /**
     * Sets the value of a Variable.
     * @param variable - The variable to set the value of.
     * @param value - The value to set the variable to.
     */
    export function SetVariable(variable: Variable, value: Any): void;

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

    /**
     * Undeploys a target player that is alive on the battlefield back to the deploy screen.
     * Note: This will not kill the player, so `mod.SoldierStateBool.IsAlive` will remain true and `mod.SoldierStateBool.IsDead` will remain false.
     * @param player - The player to undeploy.
     */
    export function UndeployPlayer(player: Player): void;

    /**
     * Resets the gamemode time to its starting value.
     * Note: This currently does not work and will not reset the gamemode time.
     */
    export function ResetGameModeTime(): void;

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

    /**
     * Teleports a target to a provided valid position facing a specified angle (in radians).
     * @param player - The player to teleport.
     * @param destination - The destination vector.
     * @param orientation - The orientation angle in radians.
     */
    export function Teleport(player: Player, destination: Vector, orientation: number): void;

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

    /**
     * Instantly resupplies the target player using a provided `ResupplyType`.
     * @param player - The player to resupply.
     * @param resupplyType - The type of resupply to perform.
     */
    export function Resupply(player: Player, resupplyType: ResupplyTypes): void;

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

    /**
     * Returns the SFX object corresponding to the provided id.
     * @param number - The id of the SFX to get.
     * @returns SFX The SFX object.
     */
    export function GetSFX(number: number): SFX;

    /**
     * Returns true if the provided map is the name of the current map.
     * Note: This function currently does not work at all.
     * @param maps - The map to check.
     * @returns boolean True if the provided map is the name of the current map, false otherwise.
     */
    export function IsCurrentMap(maps: Maps): boolean;

    /**
     * Returns a boolean value based on whether both of the provided inputs return true.
     * Note: This does not short-circuit. All inputs will be evaluated if they are derived from function calls.
     * @param boolean0 - The first boolean value.
     * @param boolean1 - The second boolean value.
     * @returns boolean True if both boolean values are true, false otherwise.
     */
    export function And(boolean0: boolean, boolean1: boolean): boolean;

    /**
     * Tertiary operator. If condition is true, return the first value. Otherwise return the second value.
     * Note: Both `trueValue` and `falseValue` will be evaluated if they are derived from function calls.
     * @param condition - The condition to evaluate.
     * @param trueValue - The value to return if the condition is true.
     * @param falseValue - The value to return if the condition is false.
     * @returns Any The value of the condition.
     */
    export function IfThenElse(condition: boolean, trueValue: Any, falseValue: Any): Any;

    /**
     * Returns a boolean based on whether either of the two inputs are true.
     * Note: This does not short-circuit. All inputs will be evaluated if they are derived from function calls.
     * @param boolean0 - The first boolean value.
     * @param boolean1 - The second boolean value.
     * @returns boolean True if either boolean value is true, false otherwise.
     */
    export function Or(boolean0: boolean, boolean1: boolean): boolean;

    /**
     * Returns a string containing the concatenation of two strings.
     * Note: This is currently broken and will not return anything valid.
     * @param string0 - The first string.
     * @param string1 - The second string.
     * @returns string The concatenated string.
     */
    export function Concat(string0: string, string1: string): string;

    /**
     * Returns a vector composed of three provided 'X' (left), 'Y' (up), and 'Z' (forward) values.
     * Note: Eastwards is positive, and Northbound is negative.
     * @param number0 - The X value (left).
     * @param number1 - The Y value (up).
     * @param number2 - The Z value (forward).
     * @returns Vector The created vector.
     */
    export function CreateVector(number0: number, number1: number, number2: number): Vector;

    /**
     * Returns the difference between two number values or two vector values.
     * Note: This is currently broken and will return the first vector with components rounded up.
     * @param vector0 - The first vector.
     * @param vector1 - The second vector.
     * @returns Vector The difference between the two vectors.
     */
    export function Subtract(vector0: Vector, vector1: Vector): Vector;

    /**
     * Returns the capture point corresponding to the provided id.
     * @param id - The ObjId of the CapturePoint.
     * @returns CapturePoint The CapturePoint object.
     */
    export function GetCapturePoint(id: number): CapturePoint;

    /**
     * Returns the HQ object corresponding to the provided id.
     * Note that HQ_PlayerSpawner has to be placed in Godot scene, assigned an ObjId and a HQArea(CollisionPolygon3D).
     * @param number - The ObjId of the HQ_PlayerSpawner.
     * @returns HQ The HQ object.
     */
    export function GetHQ(number: number): HQ;

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
}
