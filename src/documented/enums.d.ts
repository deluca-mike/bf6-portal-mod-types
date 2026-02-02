declare namespace documentedMod {
    /**
     * The Gadgets enum.
     */
    export enum Gadgets {
        /**
         * Call in an air strike. Does not work in non-BR gamemodes. May not work at all.
         */
        CallIn_Air_Strike,
        /**
         * Call in an ammo drop. Does not work in non-BR gamemodes. May not work at all.
         */
        CallIn_Ammo_Drop,
        /**
         * Call in an anti-vehicle drop. Does not work in non-BR gamemodes. May not work at all.
         */
        CallIn_Anti_Vehicle_Drop,
        /**
         * Call in an artillery strike.
         */
        CallIn_Artillery_Strike,
        /**
         * Call in a mobile redeploy. Does not work in non-BR gamemodes. May not work at all.
         */
        CallIn_Mobile_Redeploy,
        /**
         * Call in a smoke screen.
         */
        CallIn_Smoke_Screen,
        /**
         * Call in a UAV overwatch.
         */
        CallIn_UAV_Overwatch,
        /**
         * Call in a weapon drop. Does not work in non-BR gamemodes. May not work at all.
         */
        CallIn_Weapon_Drop,
        Class_Adrenaline_Injector,
        Class_Motion_Sensor,
        Class_Repair_Tool,
        /**
         * Class a supply bag. The player that picks this up will keep the supply bag gadget until respawn.
         */
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
     */
    export enum MusicEvents {
        /**
         * A loop that is automatically transitioned into from `BR_InsertionCinematic_Loop`. However, this can be
         * triggered to transition into the dropzone music earlier.
         */
        BR_InsertionCinematic_Dropzone_Loop,
        /**
         * A one-shot that then automatically transitions into `BR_InsertionCinematic_Dropzone_Loop` after a few
         * seconds, thus becoming a loop.
         */
        BR_InsertionCinematic_Loop,
        /**
         * One-shot track.
         */
        BR_InsertionJump,
        /**
         * One-shot track.
         */
        BR_InsertionLanding,
        /**
         * One-shot track. Played when you are in the last two squads remaining.
         */
        BR_LastTwoSquads,
        /**
         * Looping track. Played when you get eliminated before the end of the round.
         */
        BR_Loss_Early_Loop,
        /**
         * Looping track. Played when you lost at the end of the round while in third place or worse.
         */
        BR_Loss_EndOfRound_Loop,
        /**
         * Looping track. Played when you finish a round and come in second place.
         */
        BR_Loss_SecondPlace_Loop,
        /**
         * Pauses whatever BR music is currently playing.
         */
        BR_Pause,
        /**
         * One-shot track.
         */
        BR_RespawnSecondChance,
        /**
         * One-shot track.
         */
        BR_RespawnTower,
        /**
         * Stops any events playing in the BR music package.
         */
        BR_Stop,
        /**
         * Unpauses whatever BR music is currently playing.
         */
        BR_Unpause,
        /**
         * Looping track. Played when you win a round.
         */
        BR_WonRound_Loop,
        /**
         * Played when lobby is filled. Prior to executing this, you may need to set the timer with
         * `mod.SetMusicParam(mod.MusicParams.BRGauntlet_LobbyTimerRemaining, 10)`, using any value from 10 down to 0.
         * This parameter only needs to be set once, and does not need to be updated with an actual timer.
         */
        BRGauntlet_LobbyFilled,
        /**
         * Quiet looping track, played while waiting for players in the lobby. This is a shared event between BR and
         * Gauntlet.
         */
        BRGauntlet_WaitingForPlayers_Loop,
        /**
         * Quiet and ambient looping track, played when being deployed.
         */
        Core_Deploy_Loop,
        /**
         * Played at the end of a match. Controlled by the following states (via `mod.SetMusicParam()`):
         * - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
         * - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3
         *   (_same_ music for all three sectors).
         */
        Core_EndOfRound_Loop,
        /**
         * One-shot track.
         */
        Core_LastPhaseBegin,
        /**
         * Quiet and suspenseful looping track used when in overtime (e.g. capturing a point on Breakthrough in
         * overtime).
         */
        Core_Overtime_Loop,
        /**
         * Quiet and ambient looping track. In core gamemodes, this plays in the pause menu only when there isn't some
         * other higher-priority music track being played, such as `Core_PhaseEnded`.
         */
        Core_PauseMenu_Loop,
        /**
         * One-shot track. Controlled by the following states (via `mod.SetMusicParam()`):
         * - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
         * - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3
         *   (_unique_ music for each sector).
         */
        Core_PhaseBegin,
        /**
         * One-shot music track. Controlled by the following states (via `mod.SetMusicParam()`):
         * - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
         * - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3
         *   (_unique_ music for each sector).
         */
        Core_PhaseEnded,
        /**
         * Need to confirm this, but it might need to be triggered while another non-stinger music event (or
         * `mod.MusicParams.Core_Urgency`) is playing.
         */
        Core_Stinger_Negative,
        /**
         * Need to confirm this, but it might need to be triggered while another non-stinger music event (or
         * `mod.MusicParams.Core_Urgency`) is playing.
         */
        Core_Stinger_Positive,
        /**
         * Need to confirm this, but it might need to be triggered while another non-stinger music event (or
         * `mod.MusicParams.Core_Urgency`) is playing.
         */
        Core_Stinger_RankUp,
        /**
         * Stops any events playing in the core music package.
         */
        Core_Stop,
        /**
         * One-shot track.
         */
        Gauntlet_Deploy,
        /**
         * Looping track.
         */
        Gauntlet_Loss_FinalMission_Loop,
        /**
         * Looping track. Played when losing on any mission other than the final one.
         */
        Gauntlet_Loss_Loop,
        /**
         * One-shot track.
         */
        Gauntlet_MissionBriefing_Final,
        /**
         * One-shot track.
         */
        Gauntlet_MissionBriefing_One,
        /**
         * One-shot track.
         */
        Gauntlet_MissionBriefing_Three,
        /**
         * One-shot track.
         */
        Gauntlet_MissionBriefing_Two,
        /**
         * Pauses whatever Gauntlet music is currently playing.
         */
        Gauntlet_Pause,
        /**
         * Looping track. Contains a smooth transition when triggering `Gauntlet_Qualified_Outro`.
         */
        Gauntlet_Qualified_Loop,
        /**
         * One-shot track. Transitions nicely from `Gauntlet_Qualified_Loop` but can also be triggered as a standalone.
         */
        Gauntlet_Qualified_Outro,
        /**
         * Stops any events playing in the Gauntlet music package.
         */
        Gauntlet_Stop,
        /**
         * Unpauses whatever Gauntlet music is currently playing.
         */
        Gauntlet_Unpause,
        /**
         * Long one-shot track, 35s long.
         */
        Gauntlet_Urgency,
        /**
         * Long one-shot track, 35s long.
         */
        Gauntlet_Urgency_FinalMission,
        /**
         * Looping track.
         */
        Gauntlet_WonOperation_Loop,
    }

    /**
     * The MusicPackages enum.
     */
    export enum MusicPackages {
        /**
         * The Battle Royale music package.
         */
        BR,
        /**
         * The core multiplayer gamemode music package (such as conquest and breakthrough).
         */
        Core,
        /**
         * The Gauntlet music package.
         */
        Gauntlet,
    }

    /**
     * The MusicParams enum.
     */
    export enum MusicParams {
        /**
         * Loudness of BR music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
         * This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be
         * mindful of not blasting people's ears out.
         */
        BR_Amplitude,
        /**
         * Shared parameter for both the BR and Gauntlet music packages. When the lobby fills up in both BR and
         * Gauntlet, it starts a timer from 10 to 0.
         * You only need to set this timer once before executing mod.PlayMusic(mod.MusicEvents.BRGauntlet_LobbyFilled),
         * and you do not need to simulate an actual countdown timer for this parameter
         */
        BRGauntlet_LobbyTimerRemaining,
        /**
         * Loudness of core music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
         * This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be
         * mindful of not blasting people's ears out.
         */
        Core_Amplitude,
        /**
         * Many core music events have a winning and losing variant, which is controlled by this parameter. This is
         * effectively a boolean, but this value actually takes in a number 0 or 1.
         */
        Core_IsWinning,
        /**
         * This functions like a looping music event. It is a looping track played like when nearing the end of a
         * round (needs confirming).
         * As soon as the value goes above 0, urgency music starts playing.
         * Numbers are clamped to a range between 0 and 3. Each whole number represents one layer of music that plays on
         * full volume, while the decimals between them act as a crossfade. For example, if you set the value to 2.5, it
         * plays both layer 2 and layer 3 each at partial volume.
         */
        Core_PhaseUrgency,
        /**
         * Some music events in the core music package have different variations based on what sector you are in,
         * including a variant for game modes that do not use sectors at all.
         * Set the value to 0 to imply a gamemode that does not use sectors (e.g. Conquest), or use values 1, 2, or 3 to
         * play music for those respective sectors for a gamemode that does use sectors (e.g. Breakthrough).
         * Numbers are clamped to a range between 0 and 3, and decimals are rounded to the nearest integer.
         */
        Core_Sector,
        /**
         * This functions like a looping music event. It is a looping track played like when nearing the end of a round
         * (needs confirming).
         * As soon as the value goes above 0, urgency music starts playing. Numbers are clamped to a range between 0 and
         * 4. Each whole number represents one layer of music that plays on full volume, while the decimals between them
         * act as a crossfade. For example, if you set the value to 2.5, it plays both layer 2 and layer 3 each at
         * partial volume.
         */
        Core_Urgency,
        /**
         * Loudness of Gauntlet music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
         * This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be
         * mindful of not blasting people's ears out.
         */
        Gauntlet_Amplitude,
    }

    /**
     * The ResupplyTypes enum.
     */
    export enum ResupplyTypes {
        /**
         * Ammo box gives full primary weapon and secondary weapon ammo.
         */
        AmmoBox,
        /**
         * Ammo crate gives 16 primary weapon ammo and 18 secondary weapon ammo.
         */
        AmmoCrate,
        /**
         * Supply bag does not seem to do anything.
         */
        SupplyBag,
    }

    /**
     * The SoldierStateBool enum.
     */
    export enum SoldierStateBool {
        /**
         * Whether the soldier is an AI soldier.
         */
        IsAISoldier,
        /**
         * Whether the soldier is alive. Appears to be the opposite of `IsDead`.
         * Note that `mod.UndeployPlayer` will not kill the player, so this will remain true.
         */
        IsAlive,
        /**
         * Whether the soldier is being revived.
         */
        IsBeingRevived,
        /**
         * Whether the soldier is crouching. It is true for the entire time you have instructed your character to
         * crouch, even if you are not currently crouched or sliding, or if you ever will crouch or slide. For example,
         * if while in the air you toggle (or hold) crouch on an off, it will be true for the entire time it was toggle
         * on (or held).
         */
        IsCrouching,
        /**
         * Whether the soldier is dead. Appears to be the opposite of `IsAlive`.
         * Note that `mod.UndeployPlayer` will not kill the player, so this will remain false.
         */
        IsDead,
        /**
         * Whether the soldier is firing. It is true for as long as it takes the weapon to animate firing, no matter how
         * hard or long you press the trigger. If you rapidly fire semi-auto, it is true for every tick until you stop
         * or run out of ammo. Trying to fire with no ammo does not result in this ever going true. Applies to anything
         * (i.e. defibrillator, throwables, deployables), but not melee.
         */
        IsFiring,
        /**
         * Whether the soldier is in the air.
         */
        IsInAir,
        /**
         * Whether the soldier is interacting with something. It is true for 1 tick when interacting with nothing, or
         * with anything that does not need to be captured (i.e. a radio, door, etc). It is true for the entire time you
         * are interacting with an MCOM.
         */
        IsInteracting,
        /**
         * Whether the soldier is in a vehicle.
         */
        IsInVehicle,
        /**
         * Whether the soldier is in water.
         */
        IsInWater,
        /**
         * Whether the soldier is jumping. It is true only for the entire time you are in the air as a result of a jump,
         * not a vault (i.e. vaulting out of a window does not count).
         */
        IsJumping,
        /**
         * Whether the soldier is man down.
         */
        IsManDown,
        /**
         * Whether the soldier is on the ground.
         */
        IsOnGround,
        /**
         * Whether the soldier is parachuting. It is only true for the entire time your parachute is actually deployed.
         */
        IsParachuting,
        /**
         * Whether the soldier is prone. It is true for the entire time you have instructed your character to prone or
         * dive, even if you are not currently prone or diving, or if you ever will prone or dive. For example, if while
         * in the air you toggle (or hold) prone on an off, it will be true for the entire time it was toggle on (or
         * held).
         */
        IsProne,
        /**
         * Whether the soldier is reloading. It is only true for the entire time you are actually reloading (i.e. the\
         * reload animation for your weapon is playing).
         */
        IsReloading,
        /**
         * Whether the soldier is reviving someone. It is only true for the entire time you are actually reviving
         * someone. It is unclear if reviving with a defibrillator affects this.
         */
        IsReviving,
        /**
         * Whether the soldier is sprinting. It is only true for the time you are actually moving while sprinting. Can
         * be as low as 1 tick.
         */
        IsSprinting,
        /**
         * Whether the soldier is standing.
         */
        IsStanding,
        /**
         * Whether the soldier is vaulting. It is only true for the entire time you're actually vaulting over or onto
         * something (i.e. the animation of vaulting over an obstacle or grabbing and climbing up a ledge).
         */
        IsVaulting,
        /**
         * Whether the soldier is zooming. Is only true for the entire time you are actually aiming down sights. Can be
         * as low as 1 tick. It is unclear if binoculars or vehicle views affect this.
         */
        IsZooming,
    }
}
