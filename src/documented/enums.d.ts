declare namespace mod {
    /**
     * The Gadgets enum.
     *
     * @property CallIn_Air_Strike - Call in an air strike. Does not work in non-BR gamemodes. May not work at all.
     * @property CallIn_Ammo_Drop - Call in an ammo drop.  Does not work in non-BR gamemodes. May not work at all.
     * @property CallIn_Anti_Vehicle_Drop - Call in an anti-vehicle drop.  Does not work in non-BR gamemodes. May not work at all.
     * @property CallIn_Artillery_Strike - Call in an artillery strike.
     * @property CallIn_Mobile_Redeploy - Call in a mobile redeploy.  Does not work in non-BR gamemodes. May not work at all.
     * @property CallIn_Smoke_Screen - Call in a smoke screen.
     * @property CallIn_UAV_Overwatch - Call in a UAV overwatch.
     * @property CallIn_Weapon_Drop - Call in a weapon drop.  Does not work in non-BR gamemodes. May not work at all.
     * @property Class_Supply_Bag - Class a supply bag. The player that picks this up will keep the supply bag gadget until respawn.
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
     * @property Core_Deploy_Loop - Quiet and ambient looping track, played when being deployed.
     * @property Core_PhaseBegin - One-shot track. Controlled by the following states (via `mod.SetMusicParam()`):
     *                            - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
     *                            - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3 (_unique_ music for each sector).
     * @property Core_PhaseEnded - One-shot music track. Controlled by the following states (via `mod.SetMusicParam()`):
     *                            - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
     *                            - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3 (_unique_ music for each sector).
     * @property Core_LastPhaseBegin - One-shot track.
     * @property Core_Overtime_Loop - Quiet and suspenseful looping track used when in overtime (e.g. capturing a point on Breakthrough in overtime).
     * @property Core_EndOfRound_Loop - Played at the end of a match. Controlled by the following states (via `mod.SetMusicParam()`):
     *                                 - `mod.MusicParams.Core_IsWinning`: Different track for winning (1) and losing (0).
     *                                 - `mod.MusicParams.Core_Sector`: Different track for non-sector gamemodes 0 and sector gamemodes 1, 2, and 3 (_same_ music for all three sectors).
     * @property Core_Stinger_RankUp - Need to confirm this, but it might need to be triggered while another non-stinger music event (or `mod.MusicParams.Core_Urgency`) is playing.
     * @property Core_Stinger_Positive - Need to confirm this, but it might need to be triggered while another non-stinger music event (or `mod.MusicParams.Core_Urgency`) is playing.
     * @property Core_Stinger_Negative - Need to confirm this, but it might need to be triggered while another non-stinger music event (or `mod.MusicParams.Core_Urgency`) is playing.
     * @property Core_PauseMenu_Loop - Quiet and ambient looping track. In core gamemodes, this plays in the pause menu only when there isn't some other higher-priority music track being played, such as `Core_PhaseEnded`.
     * @property Core_Stop - Stops any events playing in the core music package.
     * @property BRGauntlet_WaitingForPlayers_Loop - Quiet looping track, played while waiting for players in the lobby. This is a shared event between BR and Gauntlet.
     * @property BRGauntlet_LobbyFilled - Played when lobby is filled. Prior to executing this, you may need to set the timer with `mod.SetMusicParam(mod.MusicParams.BRGauntlet_LobbyTimerRemaining, 10)`, using any value from 10 down to 0. This parameter only needs to be set once, and does not need to be updated with an actual timer.
     * @property BR_InsertionCinematic_Loop - A one-shot that then automatically transitions into `BR_InsertionCinematic_Dropzone_Loop` after a few seconds, thus becoming a loop.
     * @property BR_InsertionCinematic_Dropzone_Loop - A loop that is automatically transitioned into from `BR_InsertionCinematic_Loop`. However, this can be triggered to transition into the dropzone music earlier.
     * @property BR_InsertionJump - One-shot track.
     * @property BR_InsertionLanding - One-shot track.
     * @property BR_RespawnTower - One-shot track.
     * @property BR_RespawnSecondChance - One-shot track.
     * @property BR_LastTwoSquads - One-shot track. Played when you are in the last two squads remaining.
     * @property BR_Loss_Early_Loop - Looping track. Played when you get eliminated before the end of the round.
     * @property BR_Loss_EndOfRound_Loop - Looping track. Played when you lost at the end of the round while in third place or worse.
     * @property BR_Loss_SecondPlace_Loop - Looping track. Played when you finish a round and come in second place.
     * @property BR_WonRound_Loop - Looping track. Played when you win a round.
     * @property BR_Pause - Pauses whatever BR music is currently playing.
     * @property BR_Unpause - Unpauses whatever BR music is currently playing.
     * @property BR_Stop - Stops any events playing in the BR music package.
     * @property Gauntlet_Deploy - One-shot track.
     * @property Gauntlet_MissionBriefing_One - One-shot track.
     * @property Gauntlet_MissionBriefing_Two - One-shot track.
     * @property Gauntlet_MissionBriefing_Three - One-shot track.
     * @property Gauntlet_MissionBriefing_Final - One-shot track.
     * @property Gauntlet_Urgency - Long one-shot track, 35s long.
     * @property Gauntlet_Urgency_FinalMission - Long one-shot track, 35s long.
     * @property Gauntlet_Qualified_Loop - Looping track. Contains a smooth transition when triggering `Gauntlet_Qualified_Outro`.
     * @property Gauntlet_Qualified_Outro - One-shot track. Transitions nicely from `Gauntlet_Qualified_Loop` but can also be triggered as a standalone.
     * @property Gauntlet_WonOperation_Loop - Looping track.
     * @property Gauntlet_Loss_Loop - Looping track. Played when losing on any mission other than the final one.
     * @property Gauntlet_Loss_FinalMission_Loop - Looping track.
     * @property Gauntlet_Pause - Pauses whatever Gauntlet music is currently playing.
     * @property Gauntlet_Unpause - Unpauses whatever Gauntlet music is currently playing.
     * @property Gauntlet_Stop - Stops any events playing in the Gauntlet music package.
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
     * @property BR - The Battle Royale music package.
     * @property Core - The core multiplayer gamemode music package (such as conquest and breakthrough).
     * @property Gauntlet - The Gauntlet music package.
     */
    export enum MusicPackages {
        BR,
        Core,
        Gauntlet,
    }

    /**
     * The MusicParams enum.
     *
     * @property BR_Amplitude - Loudness of BR music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
     *                        This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be mindful of not blasting people's ears out.
     * @property BRGauntlet_LobbyTimerRemaining - Shared parameter for both the BR and Gauntlet music packages. When the lobby fills up in both BR and Gauntlet, it starts a timer from 10 to 0.
     *                                          You only need to set this timer once before executing mod.PlayMusic(mod.MusicEvents.BRGauntlet_LobbyFilled), and you do not need to simulate an actual countdown timer for this parameter.
     * @property Core_Amplitude - Loudness of core music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
     *                          This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be mindful of not blasting people's ears out.
     * @property Core_IsWinning - Many core music events have a winning and losing variant, which is controlled by this parameter. This is effectively a boolean, but this value actually takes in a number 0 or 1.
     * @property Core_PhaseUrgency - This functions like a looping music event. It is a looping track played like when nearing the end of a round (needs confirming).
     *                             As soon as the value goes above 0, urgency music starts playing. Numbers are clamped to a range between 0 and 3.
     *                             Each whole number represents one layer of music that plays on full volume, while the decimals between them act as a crossfade.
     *                             For example, if you set the value to 2.5, it plays both layer 2 and layer 3 each at partial volume.
     * @property Core_Sector - Some music events in the core music package have different variations based on what sector you are in, including a variant for game modes that do not use sectors at all.
     *                       Set the value to 0 to imply a gamemode that does not use sectors (e.g. Conquest), or use values 1, 2, or 3 to play music for those respective sectors for a gamemode that does use sectors (e.g. Breakthrough).
     *                       Numbers are clamped to a range between 0 and 3, and decimals are rounded to the nearest integer.
     * @property Core_Urgency - This functions like a looping music event. It is a looping track played like when nearing the end of a round (needs confirming).
     *                        As soon as the value goes above 0, urgency music starts playing. Numbers are clamped to a range between 0 and 4.
     *                        Each whole number represents one layer of music that plays on full volume, while the decimals between them act as a crossfade.
     *                        For example, if you set the value to 2.5, it plays both layer 2 and layer 3 each at partial volume.
     * @property Gauntlet_Amplitude - Loudness of Gauntlet music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
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
     * @property AmmoBox - Ammo box gives full primary weapon and secondary weapon ammo.
     * @property AmmoCrate - Ammo crate gives 16 primary weapon ammo and 18 secondary weapon ammo.
     * @property SupplyBag - Supply bag does not seem to do anything.
     */
    export enum ResupplyTypes {
        AmmoBox,
        AmmoCrate,
        SupplyBag,
    }

    /**
     * The SoldierStateBool enum.
     *
     * @property IsAISoldier - Whether the soldier is an AI soldier.
     * @property IsAlive - Whether the soldier is alive. Unclear if this includes while in a man down state that is revivable.
     * @property IsBeingRevived - Whether the soldier is being revived.
     * @property IsCrouching - Whether the soldier is crouching. It is true for the entire time you have instructed your
     *                       character to crouch, even if you are not currently crouched or sliding, or if you ever will
     *                       crouch or slide. For example, if while in the air you toggle (or hold) crouch on an off, it
     *                       will be true for the entire time it was toggle on (or held).
     * @property IsDead - Whether the soldier is dead. Unclear if this is the exact opposite of `IsAlive`.
     * @property IsFiring - Whether the soldier is firing. It is true for as long as it takes the weapon to animate
     *                    firing, no matter how hard or long you press the trigger. If you rapidly fire semi-auto, it is
     *                    true for every tick until you stop or run out of ammo. Trying to fire with no ammo does not
     *                    result in this ever going true. Applies to anything (i.e. defibrillator, throwables,
     *                    deployables), but not melee.
     * @property IsInAir - Whether the soldier is in the air.
     * @property IsInteracting - Whether the soldier is interacting with something. It is true for 1 tick when interacting
     *                         with anything that does not need to be captured (i.e. a radio, door, etc). Is true for
     *                         the entire time you are interacting with an MCOM.
     * @property IsInVehicle - Whether the soldier is in a vehicle.
     * @property IsInWater - Whether the soldier is in water.
     * @property IsJumping - Whether the soldier is jumping. It is true only for the entire time you are in the air as a
     *                     result of a jump, not a vault (i.e. vaulting out of a window does not count).
     * @property IsManDown - Whether the soldier is man down.
     * @property IsOnGround - Whether the soldier is on the ground.
     * @property IsParachuting - Whether the soldier is parachuting. It is only true for the entire time your parachute is
     *                         actually deployed.
     * @property IsProne - Whether the soldier is prone. It is true for the entire time you have instructed your
     *                   character to prone or dive, even if you are not currently prone or diving, or if you ever will
     *                   prone or dive. For example, if while in the air you toggle (or hold) prone on an off, it will
     *                   be true for the entire time it was toggle on (or held).
     * @property IsReloading - Whether the soldier is reloading. It is only true for the entire time you are actually
     *                       reloading (i.e. the reload animation for your weapon is playing).
     * @property IsReviving - Whether the soldier is reviving someone. It is only true for the entire time you are
     *                      actually reviving someone. It is unclear if reviving with a defibrillator affects this.
     * @property IsSprinting - Whether the soldier is sprinting. It is only true for the time you are actually moving
     *                       while sprinting. Can be as low as 1 tick.
     * @property IsStanding - Whether the soldier is standing.
     * @property IsVaulting - Whether the soldier is vaulting. It is only true for the entire time you're actually
     *                      vaulting over or onto something (i.e. the animation of vaulting over an obstacle or grabbing
     *                      and climbing up a ledge).
     * @property IsZooming - Whether the soldier is zooming. Is only true for the entire time you are actually aiming down
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
}
