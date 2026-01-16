// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="mod.d.ts" />

declare namespace documentedMod {
    /**
     * The AreaTrigger opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.AreaTrigger, ...args) as mod.AreaTrigger`.
     */
    export type AreaTrigger = {};

    /**
     * The Array opaque type. You must use the following specific array functions to interact with it:
     * - AppendToArray
     * - ArraySlice
     * - CountOf
     * - EmptyArray
     * - FirstOf
     * - LastOf
     * - RandomValueInArray
     * - RandomizedArray
     * - SortedArray
     * - ValueInArray
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be converted or used as a normal array.
     */
    export type Array = {};

    /**
     * The CapturePoint opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.CapturePoint, ...args) as mod.CapturePoint`.
     */
    export type CapturePoint = {};

    /**
     * The DamageType opaque type.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be compared with `EventDamageTypeCompare`.
     */
    export type DamageType = {};

    /**
     * The DeathType opaque type.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be compared with `EventDeathTypeCompare`.
     */
    export type DeathType = {};

    /**
     * The EmplacementSpawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Cannot be spawned at runtime.
     */
    export type EmplacementSpawner = {};

    /**
     * The HQ opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Cannot be spawned at runtime.
     */
    export type HQ = {};

    /**
     * The InteractPoint opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.InteractPoint, ...args) as mod.InteractPoint`.
     */
    export type InteractPoint = {};

    /**
     * The LootSpawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.LootSpawner, ...args) as mod.LootSpawner`.
     */
    export type LootSpawner = {};

    /**
     * The MCOM opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.MCOM, ...args) as mod.MCOM`.
     */
    export type MCOM = {};

    /**
     * The Message opaque type. It can never be converted to or used as a normal string.
     * TODO: Determine if it can be compared with `mod.Equals`.
     */
    export type Message = {};

    /**
     * The Player opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     */
    export type Player = {};

    /**
     * The PortalEnum opaque type. This has no currently known use.
     * TODO: Determine if it can be compared with `mod.Equals`.
     */
    export type PortalEnum = {};

    /**
     * The RingOfFire opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.RingOfFire, ...args) as mod.RingOfFire`.
     */
    export type RingOfFire = {};

    /**
     * The SFX opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_SFX, ...args) as mod.SFX`.
     */
    export type SFX = {};

    /**
     * The ScreenEffect opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * TODO: Determine if it is deprecated.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_SCREEN_EFFECT, ...args) as mod.ScreenEffect`.
     */
    export type ScreenEffect = {};

    /**
     * The Sector opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.Sector, ...args) as mod.Sector`.
     */
    export type Sector = {};

    /**
     * The SpatialObject opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_SPATIAL_OBJECT, ...args) as mod.SpatialObject`.
     */
    export type SpatialObject = {};

    /**
     * The SpawnPoint opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.PlayerSpawner, ...args) as mod.SpawnPoint`.
     */
    export type SpawnPoint = {};

    /**
     * The Spawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.AI_Spawner, ...args) as mod.Spawner`.
     */
    export type Spawner = {};

    /**
     * The Squad opaque type. Currently, it cannot be compared at all, not even with `mod.Equals`.
     * It cannot have its id retrieved either with `mod.GetObjId`.
     */
    export type Squad = {};

    /**
     * The Team opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     */
    export type Team = {};

    /**
     * The Transform opaque type. Can be created with `mod.CreateTransform`.
     * It defines a transformation (position and rotation) in 3D space that can be applied to a `mod.Object`.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if its id can be retrieved with `mod.GetObjId`.
     */
    export type Transform = {};

    /**
     * The UIWidget opaque type.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if its id can be retrieved with `mod.GetObjId`.
     */
    export type UIWidget = {};

    /**
     * The VFX opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_VFX, ...args) as mod.VFX`.
     */
    export type VFX = {};

    /**
     * The VO opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * TODO: Determine how to get a VO.
     */
    export type VO = {};

    /**
     * The Variable opaque type. This is a special type that can be used to store any type of value in the Global context, or on certain `mod.Object` types.
     * If you are writing an experience in pure TypeScript, you will not need to use this type. However, this is the only way
     * to store and retrieve values within the Block Editor, so it can be used to pass values between TypeScript and Blocks.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if its id can be retrieved with `mod.GetObjId`.
     */
    export type Variable = {};

    /**
     * The Vector opaque type. Can be created with `mod.CreateVector`. It defines a 3D vector with X, Y, and Z components.
     * It can only be compared with `mod.Equals`.
     * It's X, Y, and Z values can be retrieved with `mod.XComponentOf`, `mod.YComponentOf`, and `mod.ZComponentOf` respectively.
     */
    export type Vector = {};

    /**
     * The Vehicle opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can only be spawned with a `mod.VehicleSpawner` or a `mod.EmplacementSpawner`.
     */
    export type Vehicle = {};

    /**
     * The VehicleSpawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.VehicleSpawner, ...args) as mod.VehicleSpawner`.
     */
    export type VehicleSpawner = {};

    /**
     * The WaypointPath opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * TODO: Determine how to get a WaypointPath.
     */
    export type WaypointPath = {};

    /**
     * The WeaponPackage opaque type. Can only be compared with `mod.Equals`.
     * TODO: Determine if it can be retrieved with `mod.GetObjId`.
     * Can only be created with `mod.CreateWeaponPackage`.
     */
    export type WeaponPackage = {};

    /**
     * The WeaponUnlock opaque type.
     * This seems to be the weapon involved in a `mod.OnPlayerDamaged`, `mod.OnPlayerDied`, and `mod.OnPlayerEarnedKill` event,
     * but it is unclear how to check it to determine the actual weapon involved.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be retrieved with `mod.GetObjId`.
     */
    export type WeaponUnlock = {};

    /**
     * The WorldIcon opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * World icons appear overlaid on a player's screen, but do not shop up on the big map or minimap.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.WorldIcon, ...args) as mod.WorldIcon`.
     */
    export type WorldIcon = {};

    /**
     * The Object type is the union of all other object types. They can be compared with `mod.Equals`, or by retrieving their id with `mod.GetObjId`.
     */
    export type Object = {};

    /**
     * The Gadgets enum.
     *
     * @member CallIn_Air_Strike - Call in an air strike. Does not work in non-BR gamemodes. May not work at all.
     * @member CallIn_Ammo_Drop - Call in an ammo drop.  Does not work in non-BR gamemodes. May not work at all.
     * @member CallIn_Anti_Vehicle_Drop - Call in an anti-vehicle drop.  Does not work in non-BR gamemodes. May not work at all.
     * @member CallIn_Artillery_Strike - Call in an artillery strike.
     * @member CallIn_Mobile_Redeploy - Call in a mobile redeploy.  Does not work in non-BR gamemodes. May not work at all.
     * @member CallIn_Smoke_Screen - Call in a smoke screen.
     * @member CallIn_UAV_Overwatch - Call in a UAV overwatch.
     * @member CallIn_Weapon_Drop - Call in a weapon drop.  Does not work in non-BR gamemodes. May not work at all.
     * @member Class_Supply_Bag - Class a supply bag. The player that picks this up will keep the supply bag gadget until respawn.
     */
    export enum Gadgets {
        CallIn_Air_Strike,
        CallIn_Ammo_Drop,
        CallIn_Anti_Vehicle_Drop,
        CallIn_Artillery_Strike,
        CallIn_Mobile_Redeploy,
        CallIn_Smoke_Screen,
        CallIn_UAV_Overwatch,
        CallIn_Weapon_Drop,
        Class_Adrenaline_Injector,
        Class_Motion_Sensor,
        Class_Repair_Tool,
        Class_Supply_Bag,
        Deployable_Cover,
        Deployable_Deploy_Beacon,
        Deployable_EOD_Bot,
        Deployable_Grenade_Intercept_System,
        Deployable_Missile_Intercept_System,
        Deployable_Portable_Mortar,
        Deployable_Recon_Drone,
        Deployable_Vehicle_Supply_Crate,
        Launcher_Aim_Guided,
        Launcher_Air_Defense,
        Launcher_Auto_Guided,
        Launcher_Breaching_Projectile,
        Launcher_High_Explosive,
        Launcher_Incendiary_Airburst,
        Launcher_Long_Range,
        Launcher_Smoke_Grenade,
        Launcher_Thermobaric_Grenade,
        Launcher_Unguided_Rocket,
        Melee_Combat_Knife,
        Melee_Hunting_Knife,
        Melee_Sledgehammer,
        Misc_Acoustic_Sensor_AV_Mine,
        Misc_Anti_Personnel_Mine,
        Misc_Anti_Vehicle_Mine,
        Misc_Assault_Ladder,
        Misc_Defibrillator,
        Misc_Demolition_Charge,
        Misc_Incendiary_Round_Shotgun,
        Misc_Laser_Designator,
        Misc_Sniper_Decoy,
        Misc_Supply_Pouch,
        Misc_Tracer_Dart,
        Misc_Tripwire_Sensor_AV_Mine,
        Throwable_Anti_Vehicle_Grenade,
        Throwable_Flash_Grenade,
        Throwable_Fragmentation_Grenade,
        Throwable_Incendiary_Grenade,
        Throwable_Mini_Frag_Grenade,
        Throwable_Proximity_Detector,
        Throwable_Smoke_Grenade,
        Throwable_Stun_Grenade,
        Throwable_Throwing_Knife,
    }

    /**
     * The MusicEvents enum.
     *
     * @member Core_Deploy_Loop - Quiet and ambient looping track, played when being deployed.
     * @member Core_PhaseBegin - One-shot track. Controlled by the following states (via `mod.SetMusicParam()`):
     *                            - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
     *                            - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3 (_unique_ music for each sector).
     * @member Core_PhaseEnded - One-shot music track. Controlled by the following states (via `mod.SetMusicParam()`):
     *                            - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
     *                            - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3 (_unique_ music for each sector).
     * @member Core_LastPhaseBegin - One-shot track.
     * @member Core_Overtime_Loop - Quiet and suspenseful looping track used when in overtime (e.g. capturing a point on Breakthrough in overtime).
     * @member Core_EndOfRound_Loop - Played at the end of a match. Controlled by the following states (via `mod.SetMusicParam()`):
     *                                 - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
     *                                 - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3 (_same_ music for all three sectors).
     * @member Core_Stinger_RankUp - Need to confirm this, but it might need to be triggered while another non-stinger music event (or `mod.MusicParams.Core_Urgency`) is playing.
     * @member Core_Stinger_Positive - Need to confirm this, but it might need to be triggered while another non-stinger music event (or `mod.MusicParams.Core_Urgency`) is playing.
     * @member Core_Stinger_Negative - Need to confirm this, but it might need to be triggered while another non-stinger music event (or `mod.MusicParams.Core_Urgency`) is playing.
     * @member Core_PauseMenu_Loop - Quiet and ambient looping track. In core gamemodes, this plays in the pause menu only when there isn't some other higher-priority music track being played, such as `Core_PhaseEnded`.
     * @member Core_Stop - Stops any events playing in the core music package.
     * @member BRGauntlet_WaitingForPlayers_Loop - Quiet looping track, played while waiting for players in the lobby. This is a shared event between BR and Gauntlet.
     * @member BRGauntlet_LobbyFilled - Played when lobby is filled. Prior to executing this, you may need to set the timer with `mod.SetMusicParam(mod.MusicParams.BRGauntlet_LobbyTimerRemaining, 10)`, using any value from 10 down to 0. This parameter only needs to be set once, and does not need to be updated with an actual timer.
     * @member BR_InsertionCinematic_Loop - A one-shot that then automatically transitions into `BR_InsertionCinematic_Dropzone_Loop` after a few seconds, thus becoming a loop.
     * @member BR_InsertionCinematic_Dropzone_Loop - A loop that is automatically transitioned into from `BR_InsertionCinematic_Loop`. However, this can be triggered to transition into the dropzone music earlier.
     * @member BR_InsertionJump - One-shot track.
     * @member BR_InsertionLanding - One-shot track.
     * @member BR_RespawnTower - One-shot track.
     * @member BR_RespawnSecondChance - One-shot track.
     * @member BR_LastTwoSquads - One-shot track. Played when you are in the last two squads remaining.
     * @member BR_Loss_Early_Loop - Looping track. Played when you get eliminated before the end of the round.
     * @member BR_Loss_EndOfRound_Loop - Looping track. Played when you lost at the end of the round while in third place or worse.
     * @member BR_Loss_SecondPlace_Loop - Looping track. Played when you finish a round and come in second place.
     * @member BR_WonRound_Loop - Looping track. Played when you win a round.
     * @member BR_Pause - Pauses whatever BR music is currently playing.
     * @member BR_Unpause - Unpauses whatever BR music is currently playing.
     * @member BR_Stop - Stops any events playing in the BR music package.
     * @member Gauntlet_Deploy - One-shot track.
     * @member Gauntlet_MissionBriefing_One - One-shot track.
     * @member Gauntlet_MissionBriefing_Two - One-shot track.
     * @member Gauntlet_MissionBriefing_Three - One-shot track.
     * @member Gauntlet_MissionBriefing_Final - One-shot track.
     * @member Gauntlet_Urgency - Long one-shot track, 35s long.
     * @member Gauntlet_Urgency_FinalMission - Long one-shot track, 35s long.
     * @member Gauntlet_Qualified_Loop - Looping track. Contains a smooth transition when triggering `Gauntlet_Qualified_Outro`.
     * @member Gauntlet_Qualified_Outro - One-shot track. Transitions nicely from `Gauntlet_Qualified_Loop` but can also be triggered as a standalone.
     * @member Gauntlet_WonOperation_Loop - Looping track.
     * @member Gauntlet_Loss_Loop - Looping track. Played when losing on any mission other than the final one.
     * @member Gauntlet_Loss_FinalMission_Loop - Looping track.
     * @member Gauntlet_Pause - Pauses whatever Gauntlet music is currently playing.
     * @member Gauntlet_Unpause - Unpauses whatever Gauntlet music is currently playing.
     * @member Gauntlet_Stop - Stops any events playing in the Gauntlet music package.
     */
    export enum MusicEvents {
        BR_InsertionCinematic_Dropzone_Loop,
        BR_InsertionCinematic_Loop,
        BR_InsertionJump,
        BR_InsertionLanding,
        BR_LastTwoSquads,
        BR_Loss_Early_Loop,
        BR_Loss_EndOfRound_Loop,
        BR_Loss_SecondPlace_Loop,
        BR_Pause,
        BR_RespawnSecondChance,
        BR_RespawnTower,
        BR_Stop,
        BR_Unpause,
        BR_WonRound_Loop,
        BRGauntlet_LobbyFilled,
        BRGauntlet_WaitingForPlayers_Loop,
        Core_Deploy_Loop,
        Core_EndOfRound_Loop,
        Core_LastPhaseBegin,
        Core_Overtime_Loop,
        Core_PauseMenu_Loop,
        Core_PhaseBegin,
        Core_PhaseEnded,
        Core_Stinger_Negative,
        Core_Stinger_Positive,
        Core_Stinger_RankUp,
        Core_Stop,
        Gauntlet_Deploy,
        Gauntlet_Loss_FinalMission_Loop,
        Gauntlet_Loss_Loop,
        Gauntlet_MissionBriefing_Final,
        Gauntlet_MissionBriefing_One,
        Gauntlet_MissionBriefing_Three,
        Gauntlet_MissionBriefing_Two,
        Gauntlet_Pause,
        Gauntlet_Qualified_Loop,
        Gauntlet_Qualified_Outro,
        Gauntlet_Stop,
        Gauntlet_Unpause,
        Gauntlet_Urgency,
        Gauntlet_Urgency_FinalMission,
        Gauntlet_WonOperation_Loop,
    }

    /**
     * The MusicPackages enum.
     *
     * @member BR - The Battle Royale music package.
     * @member Core - The core multiplayer gamemode music package (such as conquest and breakthrough).
     * @member Gauntlet - The Gauntlet music package.
     */
    export enum MusicPackages {
        BR,
        Core,
        Gauntlet,
    }

    /**
     * The MusicParams enum.
     *
     * @member BR_Amplitude - Loudness of BR music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
     *                        This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be mindful of not blasting people's ears out.
     * @member BRGauntlet_LobbyTimerRemaining - Shared parameter for both the BR and Gauntlet music packages. When the lobby fills up in both BR and Gauntlet, it starts a timer from 10 to 0.
     *                                          You only need to set this timer once before executing mod.PlayMusic(mod.MusicEvents.BRGauntlet_LobbyFilled), and you do not need to simulate an actual countdown timer for this parameter.
     * @member Core_Amplitude - Loudness of core music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
     *                          This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be mindful of not blasting people's ears out.
     * @member Core_IsWinning - Many core music events have a winning and losing variant, which is controlled by this parameter. This is effectively a boolean, but this value actually takes in a number 0 or 1.
     * @member Core_PhaseUrgency - This functions like a looping music event. It is a looping track played like when nearing the end of a round (needs confirming).
     *                             As soon as the value goes above 0, urgency music starts playing. Numbers are clamped to a range between 0 and 3.
     *                             Each whole number represents one layer of music that plays on full volume, while the decimals between them act as a crossfade.
     *                             For example, if you set the value to 2.5, it plays both layer 2 and layer 3 each at partial volume.
     * @member Core_Sector - Some music events in the core music package have different variations based on what sector you are in, including a variant for game modes that do not use sectors at all.
     *                       Set the value to 0 to imply a gamemode that does not use sectors (e.g. Conquest), or use values 1, 2, or 3 to play music for those respective sectors for a gamemode that does use sectors (e.g. Breakthrough).
     *                       Numbers are clamped to a range between 0 and 3, and decimals are rounded to the nearest integer.
     * @member Core_Urgency - This functions like a looping music event. It is a looping track played like when nearing the end of a round (needs confirming).
     *                        As soon as the value goes above 0, urgency music starts playing. Numbers are clamped to a range between 0 and 4.
     *                        Each whole number represents one layer of music that plays on full volume, while the decimals between them act as a crossfade.
     *                        For example, if you set the value to 2.5, it plays both layer 2 and layer 3 each at partial volume.
     * @member Gauntlet_Amplitude - Loudness of Gauntlet music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
     *                              This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be mindful of not blasting people's ears out.
     */
    export enum MusicParams {
        BR_Amplitude,
        BRGauntlet_LobbyTimerRemaining,
        Core_Amplitude,
        Core_IsWinning,
        Core_PhaseUrgency,
        Core_Sector,
        Core_Urgency,
        Gauntlet_Amplitude,
    }

    /**
     * The ResupplyTypes enum.
     *
     * @member AmmoBox - Ammo box gives full primary weapon and secondary weapon ammo.
     * @member AmmoCrate - Ammo crate gives 16 primary weapon ammo and 18 secondary weapon ammo.
     * @member SupplyBag - Supply bag does not seem to do anything.
     */
    export enum ResupplyTypes {
        AmmoBox,
        AmmoCrate,
        SupplyBag,
    }

    /**
     * The SoldierStateBool enum.
     *
     * @member IsAISoldier - Whether the soldier is an AI soldier.
     * @member IsAlive - Whether the soldier is alive. Unclear if this includes while in a man down state that is revivable.
     * @member IsBeingRevived - Whether the soldier is being revived.
     * @member IsCrouching - Whether the soldier is crouching. It is true for the entire time you have instructed your
     *                       character to crouch, even if you are not currently crouched or sliding, or if you ever will
     *                       crouch or slide. For example, if while in the air you toggle (or hold) crouch on an off, it
     *                       will be true for the entire time it was toggle on (or held).
     * @member IsDead - Whether the soldier is dead. Unclear if this is the exact opposite of `IsAlive`.
     * @member IsFiring - Whether the soldier is firing. It is true for as long as it takes the weapon to animate
     *                    firing, no matter how hard or long you press the trigger. If you rapidly fire semi-auto, it is
     *                    true for every tick until you stop or run out of ammo. Trying to fire with no ammo does not
     *                    result in this ever going true. Applies to anything (i.e. defibrillator, throwables,
     *                    deployables), but not melee.
     * @member IsInAir - Whether the soldier is in the air.
     * @member IsInteracting - Whether the soldier is interacting with something. It is true for 1 tick when interacting
     *                         with anything that does not need to be captured (i.e. a radio, door, etc). Is true for
     *                         the entire time you are interacting with an MCOM.
     * @member IsInVehicle - Whether the soldier is in a vehicle.
     * @member IsInWater - Whether the soldier is in water.
     * @member IsJumping - Whether the soldier is jumping. It is true only for the entire time you are in the air as a
     *                     result of a jump, not a vault (i.e. vaulting out of a window does not count).
     * @member IsManDown - Whether the soldier is man down.
     * @member IsOnGround - Whether the soldier is on the ground.
     * @member IsParachuting - Whether the soldier is parachuting. It is only true for the entire time your parachute is
     *                         actually deployed.
     * @member IsProne - Whether the soldier is prone. It is true for the entire time you have instructed your
     *                   character to prone or dive, even if you are not currently prone or diving, or if you ever will
     *                   prone or dive. For example, if while in the air you toggle (or hold) prone on an off, it will
     *                   be true for the entire time it was toggle on (or held).
     * @member IsReloading - Whether the soldier is reloading. It is only true for the entire time you are actually
     *                       reloading (i.e. the reload animation for your weapon is playing).
     * @member IsReviving - Whether the soldier is reviving someone. It is only true for the entire time you are
     *                      actually reviving someone. It is unclear if reviving with a defibrillator affects this.
     * @member IsSprinting - Whether the soldier is sprinting. It is only true for the time you are actually moving
     *                       while sprinting. Can be as low as 1 tick.
     * @member IsStanding - Whether the soldier is standing.
     * @member IsVaulting - Whether the soldier is vaulting. It is only true for the entire time you're actually
     *                      vaulting over or onto something (i.e. the animation of vaulting over an obstacle or grabbing
     *                      and climbing up a ledge).
     * @member IsZooming - Whether the soldier is zooming. Is only true for the entire time you are actually aiming down
     *                     sights. Can be as low as 1 tick. It is unclear if binoculars or vehicle views affect this.
     */
    export enum SoldierStateBool {
        IsAISoldier,
        IsAlive,
        IsBeingRevived,
        IsCrouching,
        IsDead,
        IsFiring,
        IsInAir,
        IsInteracting,
        IsInVehicle,
        IsInWater,
        IsJumping,
        IsManDown,
        IsOnGround,
        IsParachuting,
        IsProne,
        IsReloading,
        IsReviving,
        IsSprinting,
        IsStanding,
        IsVaulting,
        IsZooming,
    }

    /**
     * Adds a synchronous/awaitable execution delay in seconds.
     *
     * @param {number} n - The number of seconds to wait (can be fractional).
     * @returns {Promise<void>} A promise that resolves when the delay is complete.
     */
    export function Wait(n: number): Promise<void>;

    /**
     * Loads a music package to then be triggered with the `mod.PlayMusic` action.
     * Music packages must first be loaded (such as loading in all Battle Royale music using `mod.LoadMusic(mod.MusicPackages.BR)`).
     * It is advised to do this as early as possible to allow a few seconds of time for the music to load in.
     * Typically, you'd load it in during `OnGameModeStarted()`.
     * The way a music package is laid out, is that certain music events are designed to seamlessly transition into the next event.
     *
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
     *
     * @param {MusicPackages} musicPackage - The music package to load.
     */
    export function LoadMusic(musicPackage: MusicPackages): void;

    /**
     * Plays a music event for all players.
     * You can play any music event that is part of the loaded music packages.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     *
     * @param {MusicEvents} musicEvent - The music event to play.
     */
    export function PlayMusic(musicEvent: MusicEvents): void;

    /**
     * Plays a music event for a specific team.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     *
     * @param {MusicEvents} musicEvent - The music event to play.
     * @param {Team} team - The team to play the music event for.
     */
    export function PlayMusic(musicEvent: MusicEvents, team: Team): void;

    /**
     * Plays a music event for a specific squad.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     *
     * @param {MusicEvents} musicEvent - The music event to play.
     * @param {Squad} squad - The squad to play the music event for.
     */
    export function PlayMusic(musicEvent: MusicEvents, squad: Squad): void;

    /**
     * Plays a music event for a specific player.
     * You do not need to stop an event before playing another event in the same package.
     * You can stop or pause music specifically for everyone or any team, squad, or player, even if it was previously playing for a larger audience,
     * by playing events like `mod.MusicEvents.Core_Stop` or `mod.MusicEvents.Gauntlet_Pause`, as long as its for the same music package.
     *
     * @param {MusicEvents} musicEvent - The music event to play.
     * @param {Player} player - The player to play the music event for.
     */
    export function PlayMusic(musicEvent: MusicEvents, player: Player): void;

    /**
     * Updates any parameters that a music package might have.
     *
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     *
     * @param {MusicParams} musicParam - The music parameter to update.
     * @param {number} paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that
     *                              it’s a boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number): void;

    /**
     * Updates any parameters that a music package might have, for a specific team.
     *
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     *
     * @param {MusicParams} musicParam - The music parameter to update.
     * @param {number} paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that
     *                              it’s a boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     * @param {Team} team - The team to update the parameter for.
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number, team: Team): void;

    /**
     * Updates any parameters that a music package might have, for a specific squad.
     *
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     *
     * @param {MusicParams} musicParam - The music parameter to update.
     * @param {number} paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that
     *                              it’s a boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     * @param {Squad} squad - The squad to update the parameter for.
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number, squad: Squad): void;

    /**
     * Updates any parameters that a music package might have, for a specific player.
     *
     * @example
     * // This ensures that all core music will play their "winning" variants, if they have one.
     * mod.SetMusicParam(mod.MusicParams.Core_IsWinning, 1);
     *
     * @param {MusicParams} musicParam - The music parameter to update.
     * @param {number} paramValue - The value to set the parameter to. Even if the music parameter’s name suggests that
     *                              it’s a boolean, you must still input a number value such as 0 or 1 (instead of false or true).
     * @param {Player} player - The player to update the parameter for.
     */
    export function SetMusicParam(musicParam: MusicParams, paramValue: number, player: Player): void;

    /**
     * Unloads a music package that is already loaded.
     * This is almost never necessary. In official Battlefield modes, music is always loaded at the start, and it is never unloaded mid-match.
     *
     * @param {MusicPackages} musicPackage - The music package to unload.
     */
    export function UnloadMusic(musicPackage: MusicPackages): void;

    /**
     * Sets the value of a Variable.
     *
     * @param {Variable} variable - The variable to set the value of.
     * @param {Any} value - The value to set the variable to.
     */
    export function SetVariable(variable: Variable, value: Any): void;

    /**
     * Sets a player to act independently. They will attempt to complete objectives, fire on enemy players, etc.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     */
    export function AIBattlefieldBehavior(player: Player): void;

    /**
     * Sets a player to defend an area around a location.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     * @param {Vector} defendPosition - The position to defend.
     * @param {number} minDistance - The minimum distance from the defend position.
     * @param {number} maxDistance - The maximum distance from the defend position.
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
     *
     * @param {Player} player - The player to set the behavior for.
     */
    export function AIIdleBehavior(player: Player): void;

    /**
     * Sets a player to move to a location with a line of sight to a specific position.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     * @param {Vector} position - The position to move to.
     */
    export function AILOSMoveToBehavior(player: Player, position: Vector): void;

    /**
     * Sets a player a destination to move to.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     * @param {Vector} position - The position to move to.
     */
    export function AIMoveToBehavior(player: Player, position: Vector): void;

    /**
     * Sets a player to use parachute.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     */
    export function AIParachuteBehavior(player: Player): void;

    /**
     * Sets a player to move to a valid position on navmesh near a location.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     * @param {Vector} position - The position to move to.
     */
    export function AIValidatedMoveToBehavior(player: Player, position: Vector): void;

    /**
     * Sets a player to patrol a waypoint.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the behavior for.
     * @param {WaypointPath} waypointPath - The waypoint path to patrol.
     */
    export function AIWaypointIdleBehavior(player: Player, waypointPath: WaypointPath): void;

    /**
     * Use this on an AI Spawner to control whether AI soldiers spawned will leave the game after they are killed.
     *
     * @param {Spawner} spawner - The spawner to set the behavior for.
     * @param {boolean} enableUnspawnOnDead - Whether to enable or disable unspawning on death.
     */
    export function AISetUnspawnOnDead(spawner: Spawner, enableUnspawnOnDead: boolean): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {SoldierClass} classToSpawn - The class of the AI to spawn.
     * @param {Message} name - The name of the AI to spawn.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass, name: Message): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {SoldierClass} classToSpawn - The class of the AI to spawn.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {Message} name - The name of the AI to spawn.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, name: Message): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {Team} team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, team: Team): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {SoldierClass} classToSpawn - The class of the AI to spawn.
     * @param {Message} name - The name of the AI to spawn.
     * @param {Team} team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass, name: Message, team: Team): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {SoldierClass} classToSpawn - The class of the AI to spawn.
     * @param {Team} team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, classToSpawn: SoldierClass, team: Team): void;

    /**
     * Spawn one AI soldier from a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to spawn the AI from.
     * @param {Message} name - The name of the AI to spawn.
     * @param {Team} team - The team to spawn the AI on.
     */
    export function SpawnAIFromAISpawner(spawner: Spawner, name: Message, team: Team): void;

    /**
     * Unspawns all AIs who were spawned by a specific AI Spawner.
     *
     * @param {Spawner} spawner - The spawner to unspawn the AI from.
     */
    export function UnspawnAllAIsFromAISpawner(spawner: Spawner): void;

    /**
     * Enables or disables shooting for AI.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to enable shooting for.
     */
    export function AIEnableShooting(player: Player): void;

    /**
     * Enables or disables shooting for AI.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to enable shooting for.
     * @param {boolean} enable - Whether to enable or disable shooting.
     */
    export function AIEnableShooting(player: Player, enable: boolean): void;

    /**
     * Enables or disables targeting for AI. An AI unable to target cannot shoot, but will also not notice other soldiers.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to enable targeting for.
     */
    export function AIEnableTargeting(player: Player): void;

    /**
     * Enables or disables targeting for AI. An AI unable to target cannot shoot, but will also not notice other soldiers.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to enable targeting for.
     * @param {boolean} enable - Whether to enable or disable targeting.
     */
    export function AIEnableTargeting(player: Player, enable: boolean): void;

    /**
     * Forces an AI player to fire or activate whatever weapon or gadget they are holding in their hands for a length of time.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to force fire.
     * @param {number} fireDuration - The duration to force fire for.
     */
    export function AIForceFire(player: Player, fireDuration: number): void;

    /**
     * Tweak settings for a player's gadgets.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to tweak gadget settings for.
     * @param {boolean} applyUsageCriteria - Whether to apply usage criteria.
     * @param {boolean} applyCoolDownAfterUse - Whether to apply cool down after use.
     * @param {boolean} applyInaccuracy - Whether to apply inaccuracy.
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
     *
     * @param {Player} player - The player to set the focus point for.
     * @param {Vector} point - The point to set the focus point to.
     * @param {boolean} isTarget - Whether the point is a target.
     */
    export function AISetFocusPoint(player: Player, point: Vector, isTarget: boolean): void;

    /**
     * Sets a player's move speed for MoveTo Behaviors.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the move speed for.
     * @param {MoveSpeed} moveSpeed - The move speed to set.
     */
    export function AISetMoveSpeed(player: Player, moveSpeed: MoveSpeed): void;

    /**
     * Sets a player's stance.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the stance for.
     * @param {Stance} stance - The stance to set.
     */
    export function AISetStance(player: Player, stance: Stance): void;

    /**
     * Sets player's current target.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} aiPlayer - The AI player to set the target for.
     * @param {Player} targetPlayer - The target player to set.
     */
    export function AISetTarget(aiPlayer: Player, targetPlayer: Player): void;

    /**
     * Sets player's current target.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to set the target for.
     */
    export function AISetTarget(player: Player): void;

    /**
     * Gives a player the instruction to use a specific gadget on a target location or player.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to give the instruction to.
     * @param {OpenGadgets} gadget - The gadget to use.
     * @param {Vector} targetPos - The target position to use the gadget on.
     */
    export function AIStartUsingGadget(player: Player, gadget: OpenGadgets, targetPos: Vector): void;

    /**
     * Gives a player the instruction to use a specific gadget on a target location or player.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to give the instruction to.
     * @param {OpenGadgets} gadget - The gadget to use.
     * @param {Player} targetPlayer - The target player to use the gadget on.
     */
    export function AIStartUsingGadget(player: Player, gadget: OpenGadgets, targetPlayer: Player): void;

    /**
     * Clears the player's gadget instructions.
     * This only works for AI players and wil likely error and end the execution frame if used on a human player.
     *
     * @param {Player} player - The player to clear the gadget instructions for.
     */
    export function AIStopUsingGadget(player: Player): void;

    /**
     * Sets the damage multiplier from AI players to human players.
     *
     * @param {number} damageMultiplier - The damage multiplier to set.
     */
    export function SetAIToHumanDamageModifier(damageMultiplier: number): void;

    /**
     * Finds or initializes an Array on a provided Variable, and stores a provided value in that Array at the specified index.
     * Just like with Javascript arrays, you don't need to initialize the array or create an empty array first.
     * You can actually set the value at any index, even beyond its current length, and it will be valid.
     *
     * @param {Variable} arrayVariable - The variable to find or initialize the array on.
     * @param {number} arrayIndex - The index to store the value at.
     * @param {Any} value - The value to store in the array.
     */
    export function SetVariableAtIndex(arrayVariable: Variable, arrayIndex: number, value: Any): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific team.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.GetTeam(1));
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Team} team - The team to play the sound for.
     */
    export function PlaySound(objectId: number, amplitude: number, team: Team): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific squad.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.GetSquad(1, 1));
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Squad} squad - The squad to play the sound for.
     */
    export function PlaySound(objectId: number, amplitude: number, squad: Squad): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific player.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, somePlayer);
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Player} player - The player to play the sound for.
     */
    export function PlaySound(objectId: number, amplitude: number, player: Player): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for everyone.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0);
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     */
    export function PlaySound(objectId: number, amplitude: number): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific team.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.GetTeam(1));
     *
     * @param {SFX} sound - The sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Team} team - The team to play the sound for.
     */
    export function PlaySound(sound: SFX, amplitude: number, team: Team): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific squad.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.GetSquad(1, 1));
     *
     * @param {SFX} sound - The sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Squad} squad - The squad to play the sound for.
     */
    export function PlaySound(sound: SFX, amplitude: number, squad: Squad): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for a specific player.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, somePlayer);
     *
     * @param {SFX} sound - The sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Player} player - The player to play the sound for.
     */
    export function PlaySound(sound: SFX, amplitude: number, player: Player): void;

    /**
     * Plays a 2D sound that was spawned via `mod.SpawnObject`, for everyone.
     * Passing a 3D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0);
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     */
    export function PlaySound(sound: SFX, amplitude: number): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific team.
     * Passing a 2D sound to this function will fail silently.
     * Note: The team filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetTeam(1));
     *
     * @param {SFX} sound - The sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     * @param {Team} team - The team to play the sound for.
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
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetSquad(1, 1));
     *
     * @param {SFX} sound - The sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     * @param {Squad} squad - The squad to play the sound for.
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
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0, somePlayer);
     *
     * @param {SFX} sound - The sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     * @param {Player} player - The player to play the sound for.
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
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * mod.PlaySound(sfx, 1.0, mod.CreateVector(100, -100, 200), 2.0);
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     */
    export function PlaySound(sound: SFX, amplitude: number, location: Vector, attenuationRange: number): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for everyone.
     * Passing a 2D sound to this function will fail silently.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0);
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     */
    export function PlaySound(objectId: number, amplitude: number, location: Vector, attenuationRange: number): void;

    /**
     * Plays a 3D sound that was spawned via `mod.SpawnObject`, at a location, for a specific team.
     * Passing a 2D sound to this function will fail silently.
     * Note: The team filter currently does not work. Just use the `mod.PlaySound` function that does not take a team, squad, or player.
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetTeam(1));
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     * @param {Team} team - The team to play the sound for.
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
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0, mod.GetSquad(1, 1));
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     * @param {Squad} squad - The squad to play the sound for.
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
     *
     * @example
     * // Spawned position and rotation for an SFX has no effect.
     * const sfx = mod.SpawnObject(RuntimeSpawn_Common.SFX_Gadgets_C4_Activate_OneShot2D, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SFX;
     * const sfxId = mod.GetObjId(sfx);
     * mod.PlaySound(sfxId, 1.0, mod.CreateVector(100, -100, 200), 2.0, somePlayer);
     *
     * @param {number} objectId - The id of the sound object to play.
     * @param {number} amplitude - The amplitude of the sound.
     * @param {Vector} location - The location to play the sound at.
     * @param {number} attenuationRange - The attenuation range of the sound.
     * @param {Player} player - The player to play the sound for.
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
     *
     * @param {number} objectId - The id of the sound object to stop.
     * @param {Team} team - The team to stop the sound for.
     */
    export function StopSound(objectId: number, team: Team): void;

    /**
     * Stops a given sound for a specific squad.
     *
     * @param {number} objectId - The id of the sound object to stop.
     * @param {Squad} squad - The squad to stop the sound for.
     */
    export function StopSound(objectId: number, squad: Squad): void;

    /**
     * Stops a given sound for a specific player.
     *
     * @param {number} objectId - The id of the sound object to stop.
     * @param {Player} player - The player to stop the sound for.
     */
    export function StopSound(objectId: number, player: Player): void;

    /**
     * Stops a given sound for everyone.
     *
     * @param {number} objectId - The id of the sound object to stop.
     */
    export function StopSound(objectId: number): void;

    /**
     * Stops a given sound for a specific team.
     *
     * @param {SFX} sound - The sound object to stop.
     * @param {Team} team - The team to stop the sound for.
     */
    export function StopSound(sound: SFX, team: Team): void;

    /**
     * Stops a given sound for a specific squad.
     *
     * @param {SFX} sound - The sound object to stop.
     * @param {Squad} squad - The squad to stop the sound for.
     */
    export function StopSound(sound: SFX, squad: Squad): void;

    /**
     * Stops a given sound for a specific player.
     *
     * @param {SFX} sound - The sound object to stop.
     * @param {Player} player - The player to stop the sound for.
     */
    export function StopSound(sound: SFX, player: Player): void;

    /**
     * Stops a given sound for everyone.
     *
     * @param {SFX} sound - The sound object to stop.
     */
    export function StopSound(sound: SFX): void;

    /**
     * Sets the type of emplacement that will spawn from the emplacement spawner.
     * Note: This currently does not work and emplacement spawners will always spawn the `StationaryEmplacements.BGM71TOW`.
     *
     * @param {EmplacementSpawner} emplacementSpawner - The emplacement spawner to set the type of.
     * @param {StationaryEmplacements} emplacementType - The type of emplacement to set.
     */
    export function SetEmplacementSpawnerType(
        emplacementSpawner: EmplacementSpawner,
        emplacementType: StationaryEmplacements
    ): void;

    /**
     * Request the system to evaluate if a straight line between two points is interrupted or not.
     * Use `OnRayCastHit` and `OnRayCastMissed` events to get the result.
     * Note: The events do not provide any data to easily attribute the hit or miss to a specific cast ray.
     *
     * @param {Player} player - The player to cast the ray from.
     * @param {Vector} start - The start vector of the ray.
     * @param {Vector} stop - The stop vector of the ray.
     */
    export function RayCast(player: Player, start: Vector, stop: Vector): void;

    /**
     * Request the system to evaluate if a straight line between two points is interrupted or not.
     * Use `OnRayCastHit` and `OnRayCastMissed` events to get the result.
     * Note: The events do not provide any data to easily attribute the hit or miss to a specific cast ray.
     * Note: The `OnRayCastHit` and `OnRayCastMissed` events will always provide a `player` argument, which is likely to be invalid if a ray is cast with this function.
     *
     * @param {Vector} start - The start vector of the ray.
     * @param {Vector} stop - The stop vector of the ray.
     */
    export function RayCast(start: Vector, stop: Vector): void;

    /**
     * Enables or disables a headquater.
     *
     * @param {HQ} hq - The HQ object.
     * @param {boolean} enable - Whether to enable or disable the HQ.
     */
    export function EnableHQ(hq: HQ, enable: boolean): void;

    /**
     * Enables or disables the provided objective.
     *
     * @param {CapturePoint | HQ | Sector | MCOM} objective - The objective object.
     * @param {boolean} enable - Whether to enable or disable the objective.
     */
    export function EnableGameModeObjective(objective: CapturePoint | HQ | Sector | MCOM, enable: boolean): void;

    /**
     * Force Deploy a soldier from a specific spawn point.
     *
     * @example
     * const spawnPoint = mod.SpawnObject(RuntimeSpawn_Common.PlayerSpawner, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SpawnPoint;
     * const spawnPointId = mod.GetObjId(spawnPoint);
     * mod.SpawnPlayerFromSpawnPoint(player, spawnPointId);
     *
     * @param {Player} player - The player to spawn.
     * @param {number} spawnPointId - The id of the spawn point to spawn the player from.
     */
    export function SpawnPlayerFromSpawnPoint(player: Player, spawnPointId: number): void;

    /**
     * Force Deploy a soldier from a specific spawn point.
     *
     * @example
     * const spawnPoint = mod.SpawnObject(RuntimeSpawn_Common.PlayerSpawner, mod.CreateVector(0, 0, 0), mod.CreateVector(0, 0, 0)) as mod.SpawnPoint;
     * mod.SpawnPlayerFromSpawnPoint(player, spawnPoint);
     *
     * @param {Player} player - The player to spawn.
     * @param {SpawnPoint} spawnPoint - The spawn point to spawn the player from.
     */
    export function SpawnPlayerFromSpawnPoint(player: Player, spawnPoint: SpawnPoint): void;

    /**
     * Teleports a target to a provided valid position facing a specified angle (in radians).
     *
     * @param {Player} player - The player to teleport.
     * @param {Vector} destination - The destination vector.
     * @param {number} orientation - The orientation angle in radians.
     */
    export function Teleport(player: Player, destination: Vector, orientation: number): void;

    /**
     * Enables or disables a specified Input on a target player.
     * Note: This function currently does not seem to work. Either it can only toggle certain inputs, or it only works for the last input restricted/allowed.
     *
     * @param {Player} player - The player to enable or disable the input for.
     * @param {RestrictedInputs} inputRestriction - The input to enable or disable.
     * @param {boolean} restrictInput - Whether to restrict or allow the input.
     */
    export function EnableInputRestriction(
        player: Player,
        inputRestriction: RestrictedInputs,
        restrictInput: boolean
    ): void;

    /**
     * Instantly resupplies the target player using a provided `ResupplyType`.
     *
     * @param {Player} player - The player to resupply.
     * @param {ResupplyTypes} ressuplyType - The type of resupply to perform.
     */
    export function Resupply(player: Player, ressuplyType: ResupplyTypes): void;

    /**
     * Displays a notification-type Message on the top-right of the screen for 6 seconds, for all players.
     *
     * @param {Message} message - The message to display.
     */
    export function DisplayNotificationMessage(message: Message): void;

    /**
     * Displays a notification-type Message on the top-right of the screen for 6 seconds, for a specific player.
     *
     * @param {Message} message - The message to display.
     * @param {Player} player - The player to display the message to.
     */
    export function DisplayNotificationMessage(message: Message, player: Player): void;

    /**
     * Displays a notification-type Message on the top-right of the screen for 6 seconds, for a specific team.
     *
     * @param {Message} message - The message to display.
     * @param {Team} team - The team to display the message to.
     */
    export function DisplayNotificationMessage(message: Message, team: Team): void;

    /**
     * Returns the SFX object corresponding to the provided id.
     *
     * @param {number} id - The id of the SFX to get.
     * @returns {SFX} The SFX object.
     */
    export function GetSFX(number: number): SFX;

    /**
     * Returns true if the provided map is the name of the current map.
     * Note: This function currently does not work at all.
     *
     * @param {Maps} maps - The map to check.
     * @returns {boolean} True if the provided map is the name of the current map, false otherwise.
     */
    export function IsCurrentMap(maps: Maps): boolean;

    /**
     * Returns a boolean value based on whether both of the provided inputs return true.
     * Note: This does not short-circuit. All inputs will be evaluated if they are derived from function calls.
     *
     * @param {boolean} boolean0 - The first boolean value.
     * @param {boolean} boolean1 - The second boolean value.
     * @returns {boolean} True if both boolean values are true, false otherwise.
     */
    export function And(boolean0: boolean, boolean1: boolean): boolean;

    /**
     * Tertiary operator. If condition is true, return the first value. Otherwise return the second value.
     * Note: Both `trueValue` and `falseValue` will be evaluated if they are derived from function calls.
     *
     * @param {boolean} condition - The condition to evaluate.
     * @param {Any} trueValue - The value to return if the condition is true.
     * @param {Any} falseValue - The value to return if the condition is false.
     * @returns {Any} The value of the condition.
     */
    export function IfThenElse(condition: boolean, trueValue: Any, falseValue: Any): Any;

    /**
     * Returns a boolean based on whether either of the two inputs are true.
     * Note: This does not short-circuit. All inputs will be evaluated if they are derived from function calls.
     *
     * @param {boolean} boolean0 - The first boolean value.
     * @param {boolean} boolean1 - The second boolean value.
     * @returns {boolean} True if either boolean value is true, false otherwise.
     */
    export function Or(boolean0: boolean, boolean1: boolean): boolean;

    /**
     * Returns a string containing the concatenation of two strings.
     * Note: This is currently broken and will not return anything valid.
     *
     * @param {string} string0 - The first string.
     * @param {string} string1 - The second string.
     * @returns {string} The concatenated string.
     */
    export function Concat(string0: string, string1: string): string;

    /**
     * Returns a vector composed of three provided 'X' (left), 'Y' (up), and 'Z' (forward) values.
     * Note: Eastwards is positive, and Northbound is negative.
     *
     * @param {number} number0 - The X value (left).
     * @param {number} number1 - The Y value (up).
     * @param {number} number2 - The Z value (forward).
     */
    export function CreateVector(number0: number, number1: number, number2: number): Vector;

    /**
     * Returns the difference between two number values or two vector values.
     * Note: This is currently broken and will return the first vector with components rounded up.
     *
     * @param {Vector} vector0 - The first vector.
     * @param {Vector} vector1 - The second vector.
     * @returns {Vector} The difference between the two vectors.
     */
    export function Subtract(vector0: Vector, vector1: Vector): Vector;

    /**
     * Returns the capture point corresponding to the provided id.
     *
     * @param {number} id - The ObjId of the CapturePoint.
     * @returns {CapturePoint} The CapturePoint object.
     */
    export function GetCapturePoint(id: number): CapturePoint;

    /**
     * Returns the HQ object corresponding to the provided id.
     * Note that HQ_PlayerSpawner has to be placed in Godot scene, assigned an ObjId and a HQArea(CollisionPolygon3D).
     *
     * @param {number} number - The ObjId of the HQ_PlayerSpawner.
     * @returns {HQ} The HQ object.
     */
    export function GetHQ(number: number): HQ;

    /**
     * Returns the closest alive player to a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     *
     * @param {Vector} vector - The position to find the closest player to.
     * @returns {Player} The closest player.
     */
    export function ClosestPlayerTo(vector: Vector): Player;

    /**
     * Returns the closest alive player, on a specific team, to a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     *
     * @param {Vector} vector - The position to find the closest player to.
     * @param {Team} team - The team to filter the players by.
     * @returns {Player} The closest player.
     */
    export function ClosestPlayerTo(vector: Vector, team: Team): Player;

    /**
     * Returns the farthest alive player from a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     *
     * @param {Vector} vector - The position to find the farthest player from.
     * @returns {Player} The farthest player.
     */
    export function FarthestPlayerFrom(vector: Vector): Player;

    /**
     * Returns the farthest alive player, on a specific team, from a provided position.
     * Note: If no players are alive when this block is called, the returned player will be invalid.
     *
     * @param {Vector} vector - The position to find the farthest player from.
     * @param {Team} team - The team to filter the players by.
     * @returns {Player} The farthest player.
     */
    export function FarthestPlayerFrom(vector: Vector, team: Team): Player;

    /**
     * Returns the team object of the specified player.
     *
     * @param {Player} player - The player to get the team of.
     * @returns {Team} The team object.
     */
    export function GetTeam(player: Player): Team;

    /**
     * Returns the team object of the provided team id number.
     * Team 0 is neutral/none, while all other team values up to 32 are valid.
     *
     * @param {number} teamId - The id of the team to get.
     * @returns {Team} The team object.
     */
    export function GetTeam(teamId: number): Team;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player, or format string (which can take up to 3 format items).
     *
     * @example
     * // strings.json has a key "Hello" with the value "Hello {}! I am {}, player number {}." and a key "World" with the value "World".
     * const message = mod.Message(mod.stringkeys.Hello, mod.stringkeys.World, player, mod.GetObjId(player));
     *
     * @param {string | number | Player} msg - The message string, number, or player object.
     * @param {string | number | Player} msgArg0 - In the case where `msg` is a message string with `{}` placeholders, this is the first argument to replace the first placeholder.
     * @param {string | number | Player} msgArg1 - In the case where `msg` is a message string with `{}` placeholders, this is the second argument to replace the second placeholder.
     * @param {string | number | Player} msgArg2 - In the case where `msg` is a message string with `{}` placeholders, this is the third argument to replace the third placeholder.
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
     *
     * @example
     * // strings.json has a key "Hello" with the value "Hello {}! I am {}." and a key "World" with the value "World".
     * const message = mod.Message(mod.stringkeys.Hello, mod.stringkeys.World, player);
     *
     * @param {string | number | Player} msg - The message string, number, or player object.
     * @param {string | number | Player} msgArg0 - In the case where `msg` is a message string with `{}` placeholders, this is the first argument to replace the first placeholder.
     * @param {string | number | Player} msgArg1 - In the case where `msg` is a message string with `{}` placeholders, this is the second argument to replace the second placeholder.
     */
    export function Message(
        msg: string | number | Player,
        msgArg0: string | number | Player,
        msgArg1: string | number | Player
    ): Message;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player, or format string (which can take up to 1 format items).
     *
     * @example
     * // strings.json has a key "Hello" with the value "Hello {}!" and a key "World" with the value "World".
     * const message = mod.Message(mod.stringkeys.Hello, mod.stringkeys.World);
     *
     * @param {string | number | Player} msg - The message string, number, or player object.
     * @param {string | number | Player} msgArg0 - In the case where `msg` is a message string with `{}` placeholders, this is the first argument to replace the first placeholder.
     */
    export function Message(msg: string | number | Player, msgArg0: string | number | Player): Message;

    /**
     * Returns a constructed message object which can be used with event game mode message, notification message, highlighted game mode message, and custom notification message.
     * The message object is created by providing a number, player.
     *
     * @example
     * // strings.json has a key "Hello" with the value "Hello!".
     * const message = mod.Message(mod.stringkeys.Hello);
     *
     * @param {string | number | Player} msg - The message string, number, or player object.
     */
    export function Message(msg: string | number | Player): Message;

    namespace EventHandlerSignatures {
        /**
         * This will trigger when a Player enters an AreaTrigger.
         * Note: The AreaTrigger has to be placed in Godot scene, assigned an ObjId and a CollisionPolygon3D(volume).
         *
         * @param {Player} eventPlayer - The player that entered the AreaTrigger.
         * @param {AreaTrigger} eventAreaTrigger - The AreaTrigger that the player entered.
         */
        export function OnPlayerEnterAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void;

        /**
         * This will trigger when a Player enters a CapturePoint capturing area.
         * Note: The CapturePoint has to be placed in Godot scene, assigned an ObjId and a CapturePointArea(volume).
         *
         * @param {Player} eventPlayer - The player that entered the CapturePoint.
         * @param {CapturePoint} eventCapturePoint - The CapturePoint that the player entered.
         */
        export function OnPlayerEnterCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void;

        /**
         * This will trigger when a Player exits an AreaTrigger.
         * Note: The AreaTrigger has to be placed in Godot scene, assigned an ObjId and a CollisionPolygon3D(volume).
         *
         * @param {Player} eventPlayer - The player that exited the AreaTrigger.
         * @param {AreaTrigger} eventAreaTrigger - The AreaTrigger that the player exited.
         */
        export function OnPlayerExitAreaTrigger(eventPlayer: mod.Player, eventAreaTrigger: mod.AreaTrigger): void;

        /**
         * This will trigger when a Player exits a CapturePoint capturing area.
         * Note: The CapturePoint has to be placed in Godot scene, assigned an ObjId and a CapturePointArea(volume).
         *
         * @param {Player} eventPlayer - The player that exited the CapturePoint.
         * @param {CapturePoint} eventCapturePoint - The CapturePoint that the player exited.
         */
        export function OnPlayerExitCapturePoint(eventPlayer: mod.Player, eventCapturePoint: mod.CapturePoint): void;

        /**
         * This will trigger when a Player interacts with an UI button.
         * Note: The `eventUIButtonEvent` argument does not seem to work, so you may need to always treat this as a click.
         *
         * @param {Player} eventPlayer - The player that interacted with the UI button.
         * @param {UIWidget} eventUIWidget - The UI widget that the player interacted with.
         * @param {UIButtonEvent} eventUIButtonEvent - The event that occurred.
         */
        export function OnPlayerUIButtonEvent(
            eventPlayer: mod.Player,
            eventUIWidget: mod.UIWidget,
            eventUIButtonEvent: mod.UIButtonEvent
        ): void;
    }
}
