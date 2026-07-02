declare namespace mod {
    export enum AiInput {
        Crouch,
        FireWeapon,
        Interact,
        Jump,
        Prone,
        Reload,
        SelectCharacterGadget,
        SelectOpenGadget,
        SelectPrimary,
        SelectSecondary,
        SelectThrowable,
        Sprint,
        Strafe,
    }
    export enum AmmoTypes {
        AR_Carbine_Ammo,
        Armor_Plate,
        LMG_Ammo,
        Pistol_SMG_Ammo,
        Shotgun_Ammo,
        Sniper_DMR_Ammo,
    }
    export enum ArmorTypes {
        CeramicArmor,
        NoArmor,
        SoftArmor,
    }
    export enum BombState {
        Carried,
        Defusing,
        Dropped,
        Inactive,
        ObjectiveCompleted,
        Planted,
        Planting,
        Resetting,
        Spawned,
        Unspawned,
    }
    export enum Cameras {
        FirstPerson,
        Fixed,
        Free,
        ThirdPerson,
    }
    export enum CustomNotificationSlots {
        HeaderText,
        MessageText1,
        MessageText2,
        MessageText3,
        MessageText4,
    }
    export enum Factions {
        NATO,
        PaxArmata,
    }
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
        Launcher_IGLA,
        Launcher_Incendiary_Airburst,
        Launcher_Long_Range,
        Launcher_Smoke_Grenade,
        Launcher_Thermobaric_Grenade,
        Launcher_Unguided_Rocket,
        Mask_Gas,
        Mask_NVG,
        Melee_Combat_Knife,
        Melee_Hunting_Knife,
        Melee_Ice_Axe,
        Melee_Serrated_Blade,
        Melee_Sledgehammer,
        Misc_Acoustic_Sensor_AV_Mine,
        Misc_Anti_Personnel_Mine,
        Misc_Anti_Vehicle_Mine,
        Misc_Assault_Ladder,
        Misc_Defibrillator,
        Misc_Demolition_Charge,
        Misc_Incendiary_Round_Shotgun,
        Misc_Laser_Designator,
        Misc_PortalGadget,
        Misc_Sniper_Decoy,
        Misc_Supply_Pouch,
        Misc_Suppression,
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
    export enum GameModeTicker {
        None,
        Ticker_Conquest,
    }
    export enum GolmudTrainMoveCommands {
        MoveEast,
        MoveWest,
        Stop,
    }
    export enum GolmudTrainStopReason {
        ReachedEastTerminal,
        ReachedWestTerminal,
        StoppedInTransit,
    }
    export enum GolmudTrainVariants {
        MovingTrain,
        None,
        StaticTrain_Breakthrough,
        StaticTrain_Rush,
    }
    export enum InventorySlots {
        Callins,
        ClassGadget,
        GadgetOne,
        GadgetTwo,
        MeleeWeapon,
        MiscGadget,
        PrimaryWeapon,
        SecondaryWeapon,
        Throwable,
    }
    export enum MCOMArmType {
        Bomb,
        Default,
    }
    export enum Maps {
        Abbasid,
        Aftermath,
        Badlands,
        Battery,
        Capstone,
        Contaminated,
        Dumbo,
        Eastwood,
        Firestorm,
        GolmudRailway,
        Granite_ClubHouse,
        Granite_MainStreet,
        Granite_Marina,
        Granite_MilitaryRnD,
        Granite_MilitaryStorage,
        Granite_TechCampus,
        Granite_Underground,
        Limestone,
        Outskirts,
        Plaza,
        Sand,
        Subsurface,
        Tungsten,
    }
    export enum MoveSpeed {
        InvestigateRun,
        InvestigateSlowWalk,
        InvestigateWalk,
        Patrol,
        Run,
        Sprint,
        Walk,
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
        /**
         * Clears the queue of tracks. This is the only way to do so. Note, playing a track does not clear it out of the
         * queue, as you may want to loop your queued tracks.
         */
        Radio_ClearQueue,
        /**
         * Skips to the next track in the queue. What will happen at the end of your queue depends on
         * `mod.MusicParams.Radio_ContinueQueueOnTrackEnd` and `mod.MusicParams.Radio_LoopQueuedTracks`.
         */
        Radio_NextQueuedTrack,
        /**
         * Starts playing the queued tracks in the currently selected station. If the queue is empty, nothing will play.
         * Controlled by the following states (via `mod.SetMusicParam()`):
         *   - `mod.MusicParams.Radio_Channel`: You must select one channel and queue up tracks within it.
         *                                      Channels are listed in the `MusicParams` section.
         *   - `mod.MusicParams.Radio_Biome`: If you choose the biome channel
         *                                    (`mod.SetMusicParam(mod.MusicParams.Radio_Channel, 4)`), you have several
         *                                    biomes to choose from, detailed in the `MusicParams` section.
         *   - `mod.MusicParams.Radio_QueueTrackNumber`: You must queue which songs you'd like to hear. Number of
         *                                               available tracks is detailed in the `MusicParams` section.
         */
        Radio_Play,
        /**
         * Stops playing the queued track. Playing again will restart the same song from the beginning (i.e. this is not
         * a pause function).
         */
        Radio_Stop,
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
        /**
         * The Radio music package.
         */
        Radio,
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
        /**
         * Loudness of Radio music events, represented as a multiplier. 0 is silent, 1 is the full default volume.
         * This parameter is clamped from 0 to 3, so if you wanted, you can play the music at triple volume. Please be
         * mindful of not blasting people's ears out.
         */
        Radio_Amplitude,
        /**
         * If `Radio_Channel` is set to channel 4, this is used to select which biome's radio station to queue tracks
         * from. The tracks may not necessarily be from the country or region listed in the biome name, but rather are
         * simply the tracks you hear in radios in maps set in these biomes.
         * You have access to the following biomes:
         *   - 0: Gibraltar
         *   - 1: Tajikistan
         *   - 2: Egypt
         *   - 3: US - West Coast
         *   - 4: US - East Coast
         *   - 5: Bulgaria
         *   - 6: Turkmenistan
         */
        Radio_Biome,
        /**
         * Sets the channel from which you will be queueing tracks. There may be tracks whose genres don't fit the labels
         * below. You have access to the following channels (the BF Pro channel is not available through the Portal music
         * system):
         *   - 0: Hip Hop
         *   - 1: Rock
         *   - 2: BF Themes
         *   - 3: Reggaeton
         *   - 4: Biome-specific (selected via `Radio_Biome`)
         *   - 5: Classical
         *   - 6: Pop
         */
        Radio_Channel,
        /**
         * If 1, when the current song is done, the next queued song will start. If 0, the radio will auto-stop. Playing the
         * radio again after a song ends will play the next queued song.
         */
        Radio_ContinueQueueOnTrackEnd,
        /**
         * If 1, when the last queued song is done, the song at the start of the queue will start. If 0, the radio will
         * auto-stop. Playing the radio again after a queued list ends will go back and play the first queued song.
         */
        Radio_LoopQueuedTracks,
        /**
         * Select which track to add next in the queue. The queue is empty by default, and no track will play until you
         * queue up tracks. Here are the track lengths of each station (a station that has 17 tracks are indexed 0
         * through 16):
         *   - Channel 0: 17 tracks
         *   - Channel 1: 18 tracks
         *   - Channel 2: 10 tracks
         *   - Channel 3: 2 tracks
         *   - Channel 4: Biome-specific:
         *     - Biome 0: 18 tracks
         *     - Biome 1: 16 tracks
         *     - Biome 2: 16 tracks
         *     - Biome 3: 19 tracks
         *     - Biome 4: 18 tracks
         *     - Biome 5: 2 tracks
         *     - Biome 6: 18 tracks
         *   - Channel 5: 32 tracks
         *   - Channel 6: 15 tracks
         */
        Radio_QueueTrackNumber,
    }
    export enum PlayerDamageTypes {
        Default,
        Explosion,
        Fall,
        Fire,
        Headshot,
        Melee,
    }
    export enum PlayerDeathTypes {
        Deserting,
        Drowning,
        Explosion,
        Fall,
        Fire,
        Headshot,
        Melee,
        Penetration,
        Redeploy,
        Roadkill,
        Weapon,
    }
    export enum PlayerFilterTypes {
        None,
        Player,
        Squad,
        TeamId,
    }
    export enum RestrictedInputs {
        CameraPitch,
        CameraYaw,
        Crouch,
        CycleFire,
        CyclePrimary,
        FireWeapon,
        Interact,
        Jump,
        MoveForwardBack,
        MoveLeftRight,
        Prone,
        Reload,
        SelectCharacterGadget,
        SelectMelee,
        SelectOpenGadget,
        SelectPrimary,
        SelectSecondary,
        SelectThrowable,
        Sprint,
        Zoom,
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
    export enum ScoreCriteria {
        HighestProgress,
        LowestProgress,
    }
    export enum ScoreboardType {
        CustomFFA,
        CustomTwoTeams,
        DefaultFFA,
        NotSet,
        Off,
    }
    export enum ScreenEffects {
        Night,
        Saturated,
        Stealth,
        VL7,
    }
    export enum SoldierClass {
        Assault,
        Engineer,
        Recon,
        Support,
    }
    export enum SoldierEffects {
        FreezeStatusEffect,
        HeatStatusEffect,
        VL7Effect,
    }
    /**
     * The SoldierStateBool enum.
     */
    export enum SoldierStateBool {
        HasBomb,
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
    export enum SoldierStateNumber {
        CurrentHealth,
        CurrentWeaponAmmo,
        CurrentWeaponMagazineAmmo,
        MaxHealth,
        NormalizedHealth,
        Speed,
    }
    export enum SoldierStateVector {
        EyePosition,
        GetFacingDirection,
        GetLinearVelocity,
        GetPosition,
    }
    export enum SpawnModes {
        AutoSpawn,
        Deploy,
        Spectating,
    }
    export enum SpectatingGroup {
        All,
        Squad,
        Team,
    }
    export enum SpotStatus {
        SpotInBoth,
        SpotInMinimap,
        SpotInWorld,
        Unspot,
    }
    export enum Stance {
        Crouch,
        Prone,
        Stand,
    }
    export enum StationaryEmplacements {
        BGM71TOW,
        GDF009,
        M2MG,
    }
    export enum Types {
        AreaTrigger,
        Array,
        Bomb,
        Boolean,
        CapturePoint,
        DamageType,
        DeathType,
        EmplacementSpawner,
        Enum_AiInput,
        Enum_AmmoTypes,
        Enum_BombState,
        Enum_Cameras,
        Enum_CustomNotificationSlots,
        Enum_Factions,
        Enum_Gadgets,
        Enum_GameModeTicker,
        Enum_GolmudTrainMoveCommands,
        Enum_GolmudTrainStopReason,
        Enum_GolmudTrainVariants,
        Enum_InventorySlots,
        Enum_Maps,
        Enum_MCOMArmType,
        Enum_MoveSpeed,
        Enum_MusicEvents,
        Enum_MusicPackages,
        Enum_MusicParams,
        Enum_PlayerDamageTypes,
        Enum_PlayerDeathTypes,
        Enum_PlayerFilterTypes,
        Enum_RestrictedInputs,
        Enum_ResupplyTypes,
        Enum_RuntimeSpawn_Abbasid,
        Enum_RuntimeSpawn_Aftermath,
        Enum_RuntimeSpawn_Badlands,
        Enum_RuntimeSpawn_Battery,
        Enum_RuntimeSpawn_Capstone,
        Enum_RuntimeSpawn_Common,
        Enum_RuntimeSpawn_Contaminated,
        Enum_RuntimeSpawn_Dumbo,
        Enum_RuntimeSpawn_Eastwood,
        Enum_RuntimeSpawn_FireStorm,
        Enum_RuntimeSpawn_GolmudRailway,
        Enum_RuntimeSpawn_Granite_Downtown,
        Enum_RuntimeSpawn_Granite_Marina,
        Enum_RuntimeSpawn_Granite_MilitaryRnD,
        Enum_RuntimeSpawn_Granite_MilitaryStorage,
        Enum_RuntimeSpawn_Granite_ResidentialNorth,
        Enum_RuntimeSpawn_Granite_TechCenter,
        Enum_RuntimeSpawn_Granite_Underground,
        Enum_RuntimeSpawn_Limestone,
        Enum_RuntimeSpawn_Outskirts,
        Enum_RuntimeSpawn_Plaza,
        Enum_RuntimeSpawn_Sand,
        Enum_RuntimeSpawn_Subsurface,
        Enum_RuntimeSpawn_Tungsten,
        Enum_ScoreboardType,
        Enum_ScoreCriteria,
        Enum_ScreenEffects,
        Enum_SoldierClass,
        Enum_SoldierEffects,
        Enum_SoldierStateBool,
        Enum_SoldierStateNumber,
        Enum_SoldierStateVector,
        Enum_SpawnModes,
        Enum_SpectatingGroup,
        Enum_SpotStatus,
        Enum_Stance,
        Enum_StationaryEmplacements,
        Enum_Types,
        Enum_UIAnchor,
        Enum_UIBgFill,
        Enum_UIButtonEvent,
        Enum_UIDepth,
        Enum_UIImageType,
        Enum_VehicleCategories,
        Enum_VehicleList,
        Enum_VehicleStateVector,
        Enum_VoiceOverEvents2D,
        Enum_VoiceOverFlags,
        Enum_WeaponAttachments,
        Enum_Weapons,
        Enum_WorldIconImages,
        FixedCamera,
        HQ,
        InteractPoint,
        LootMissionObjectManager,
        LootSpawner,
        MapSpecificFeature,
        MCOM,
        Message,
        Number,
        Object,
        Player,
        PortalEnum,
        RingOfFire,
        ScoreboardType,
        ScreenEffect,
        Sector,
        SFX,
        SpatialObject,
        Spawner,
        SpawnPoint,
        Squad,
        String,
        Team,
        Transform,
        UIWidget,
        Variable,
        Vector,
        Vehicle,
        VehicleSpawner,
        VFX,
        VL7Cloud,
        VO,
        WaypointPath,
        WeaponPackage,
        WeaponUnlock,
        WorldIcon,
    }
    export enum UIAnchor {
        BottomCenter,
        BottomLeft,
        BottomRight,
        Center,
        CenterLeft,
        CenterRight,
        TopCenter,
        TopLeft,
        TopRight,
    }
    export enum UIBgFill {
        Blur,
        GradientBottom,
        GradientLeft,
        GradientRight,
        GradientTop,
        None,
        OutlineThick,
        OutlineThin,
        Solid,
    }
    export enum UIButtonEvent {
        ButtonDown,
        ButtonUp,
        FocusIn,
        FocusOut,
        HoverIn,
        HoverOut,
    }
    export enum UIDepth {
        AboveGameUI,
        BelowGameUI,
    }
    export enum UIImageType {
        CrownOutline,
        CrownSolid,
        None,
        QuestionMark,
        RifleAmmo,
        SelfHeal,
        SpawnBeacon,
        TEMP_PortalIcon,
    }
    export enum VehicleCategories {
        Air_All,
        Air_Heli,
        Air_Plane,
        Ground_All,
        Ground_Combat,
        Ground_Transport,
        Naval_All,
    }
    export enum VehicleList {
        Abrams,
        AH64,
        AH6M,
        AH6M_Pax,
        Cheetah,
        Couch,
        CV90,
        DirtBike,
        DirtBike_Pax,
        Eurocopter,
        F16,
        F22,
        Flyer60,
        Gepard,
        GolfCart,
        JAS39,
        Leopard,
        M2Bradley,
        Marauder,
        Marauder_Pax,
        Quadbike,
        RHIB,
        SU57,
        UH60,
        UH60_Pax,
        Vector,
    }
    export enum VehicleStateVector {
        FacingDirection,
        LinearVelocity,
        VehiclePosition,
    }
    export enum VoiceOverEvents2D {
        CheckPointEnemy,
        CheckPointEnemyAnother,
        CheckPointFriendly,
        CheckPointFriendlyAnother,
        CheckPointMovingToLastEnemy,
        CheckPointMovingToLastFriendly,
        FirstSpawn,
        FirstSpawnDefender,
        GlobalAircraftAvailable,
        GlobalAirstrikeWarning,
        GlobalEOMDefeat,
        GlobalEOMVictory,
        GlobalOutOfBounds,
        MComArmEnemy,
        MComArmFriendly,
        MComDefuseEnemy,
        MComDefuseFriendly,
        MComDestroyedEnemy,
        MComDestroyedFriendly,
        MComDestroyedOneLeftEnemy,
        MComDestroyedOneLeftFriendly,
        ObjectiveCaptured,
        ObjectiveCapturedEnemy,
        ObjectiveCapturedEnemyGeneric,
        ObjectiveCapturedGeneric,
        ObjectiveCapturing,
        ObjectiveContested,
        ObjectiveLocated,
        ObjectiveLockdownEnemy,
        ObjectiveLockdownFriendly,
        ObjectiveLost,
        ObjectiveNeutralised,
        ObjectiveTerritoryLost,
        ObjectiveTerritoryLostGeneric,
        ObjectiveTerritoryTaken,
        ObjectiveTerritoryTakenGeneric,
        PlayerCountEnemyLow,
        PlayerCountFriendlyLow,
        ProgressEarlyLosing,
        ProgressEarlyWinning,
        ProgressLateLosing,
        ProgressLateWinning,
        ProgressMidLosing,
        ProgressMidWinning,
        RoundEndEnemyCapture,
        RoundEndEnemyKills,
        RoundEndFriendlyCapture,
        RoundEndFriendlyKills,
        RoundLastRound,
        RoundStartGeneric,
        RoundSuddenDeath,
        RoundSwitchSides,
        SectorTakenAttacker,
        SectorTakenDefender,
        Time120Left,
        Time30Left,
        Time60Left,
        TimeLow,
        TimeOvertime,
        VehicleArmoredSpawn,
        VehicleTankSpawn,
    }
    export enum VoiceOverFlags {
        Alpha,
        Bravo,
        Charlie,
        Delta,
        Echo,
        Foxtrot,
        Golf,
        Hotel,
        India,
    }
    export enum WeaponAttachments {
        Ammo_Buckshot,
        Ammo_Flechette,
        Ammo_FMJ,
        Ammo_Frangible,
        Ammo_Hollow_Point,
        Ammo_Match_Grade,
        Ammo_Polymer_Case,
        Ammo_Slugs,
        Ammo_Synthetic_Tip,
        Ammo_Tungsten_Core,
        Barrel_10_Factory,
        Barrel_10_Full,
        Barrel_102mm_Compact,
        Barrel_105_Custom,
        Barrel_105_Factory,
        Barrel_11_Extended,
        Barrel_11_Heavy,
        Barrel_114mm_Factory,
        Barrel_114mm_Pencil,
        Barrel_115_Commando,
        Barrel_12_Assaulter,
        Barrel_12_SBR,
        Barrel_122mm_Factory,
        Barrel_122mm_Pencil,
        Barrel_125_Fluted,
        Barrel_125_Mid,
        Barrel_13_Factory,
        Barrel_13_Fluted,
        Barrel_13_Prototype,
        Barrel_13_Standard,
        Barrel_135mm_Long,
        Barrel_145_Alt,
        Barrel_145_Carbine,
        Barrel_145_Common,
        Barrel_145_Factory,
        Barrel_145_Standard,
        Barrel_16_Custom,
        Barrel_16_Factory,
        Barrel_16_Pencil,
        Barrel_16_Rifle,
        Barrel_16_Short,
        Barrel_16_US,
        Barrel_165_Basic,
        Barrel_165_Fluted,
        Barrel_165_LSW,
        Barrel_165_Rifle,
        Barrel_17_Cut,
        Barrel_17_Factory,
        Barrel_17_Fluted,
        Barrel_18_Custom,
        Barrel_18_EBR,
        Barrel_18_Extended,
        Barrel_18_US_LB,
        Barrel_180mm_Prototype,
        Barrel_180mm_Standard,
        Barrel_185_Factory,
        Barrel_189_Factory,
        Barrel_189_Prototype,
        Barrel_20_Factory,
        Barrel_20_LE,
        Barrel_20_Lima,
        Barrel_20_Long,
        Barrel_20_OH,
        Barrel_20_SDM_R,
        Barrel_200mm_Custom,
        Barrel_200mm_Custom_H,
        Barrel_200mm_Factory,
        Barrel_200mm_Fluted,
        Barrel_215_Factory,
        Barrel_215_Fluted,
        Barrel_22_E3_Long,
        Barrel_22_Factory,
        Barrel_225mm_Factory,
        Barrel_24_Bravo,
        Barrel_24_Extended,
        Barrel_24_Fluted,
        Barrel_24_Full,
        Barrel_240mm_Fluted,
        Barrel_240mm_SB,
        Barrel_245mm_Custom,
        Barrel_26_Carbon,
        Barrel_26_Factory,
        Barrel_264mm_Factory,
        Barrel_264mm_Fluted,
        Barrel_264mm_Prototype,
        Barrel_27_MK22,
        Barrel_303mm_LB,
        Barrel_305mm_Custom,
        Barrel_305mm_Custom_H,
        Barrel_314mm_Factory,
        Barrel_314mm_Fluted,
        Barrel_314mm_Prototype,
        Barrel_330mm_Mk3,
        Barrel_349mm_Fluted,
        Barrel_349mm_SB,
        Barrel_370mm_Compact,
        Barrel_39_Factory,
        Barrel_39_Pencil,
        Barrel_391mm_CQB,
        Barrel_406mm_Standard,
        Barrel_407mm_Civ_S,
        Barrel_409mm_Cut,
        Barrel_409mm_Factory,
        Barrel_409mm_Fluted,
        Barrel_409mm_US,
        Barrel_415mm_Factory,
        Barrel_415mm_Fluted,
        Barrel_415mm_Prototype,
        Barrel_419mm_Boar_F,
        Barrel_430mm_Cut,
        Barrel_430mm_Factory,
        Barrel_442_mm_CQB,
        Barrel_45_Compact,
        Barrel_450mm_Factory,
        Barrel_450mm_Standard,
        Barrel_457mm_Mk9,
        Barrel_457mm_Urban,
        Barrel_458mm_Custom,
        Barrel_465mm_LB,
        Barrel_480mm_Factory,
        Barrel_480mm_Fluted,
        Barrel_480mm_MG,
        Barrel_5_Factory,
        Barrel_5_Pencil,
        Barrel_508mm_Mk8,
        Barrel_510mm_DMR,
        Barrel_510mm_Fluted,
        Barrel_512_Compact,
        Barrel_514mm_Carbine,
        Barrel_518mm_Factory,
        Barrel_518mm_Fluted,
        Barrel_521mm_Boar,
        Barrel_521mm_Boar_F,
        Barrel_55_Factory,
        Barrel_55_Fluted,
        Barrel_550mm_Factory,
        Barrel_556mm_Prototype,
        Barrel_560mm_Cut,
        Barrel_560mm_Factory,
        Barrel_565mm_Fluted,
        Barrel_565mm_Para,
        Barrel_590mm_Factory,
        Barrel_6_Fluted,
        Barrel_6_Standard,
        Barrel_600mm_Cut,
        Barrel_600mm_DMR,
        Barrel_600mm_Fluted,
        Barrel_600mm_Tabuk,
        Barrel_612mm_VMW,
        Barrel_620mm_Classic,
        Barrel_646mm_Cut,
        Barrel_646mm_Fluted,
        Barrel_646mm_LSW,
        Barrel_65_Extended,
        Barrel_650mm_Factory,
        Barrel_650mm_Fluted,
        Barrel_675_Factory,
        Barrel_68_Factory,
        Barrel_68_Fluted,
        Barrel_730mm_3LR,
        Barrel_75_Compact,
        Barrel_8_Extended,
        Barrel_837_Long,
        Barrel_9_Factory,
        Barrel_9_Fluted,
        Barrel_9_Heavy,
        Barrel_IAR_Heavy,
        Bottom_5_mW_Green,
        Bottom_5_mW_Red,
        Bottom_50_mW_Green,
        Bottom_6H64_Vertical,
        Bottom_Adjustable_Angled,
        Bottom_Alloy_Vertical,
        Bottom_Bipod,
        Bottom_Canted_Stubby,
        Bottom_Classic_Grip_Pod,
        Bottom_Classic_Vertical,
        Bottom_Compact_Handstop,
        Bottom_Factory_Angled,
        Bottom_Flashlight,
        Bottom_Folding_Stubby,
        Bottom_Folding_Vertical,
        Bottom_Full_Angled,
        Bottom_Laser_Light_Combo_Green,
        Bottom_Laser_Light_Combo_Red,
        Bottom_Low_Profile_Stubby,
        Bottom_PTT_Grip_Pod,
        Bottom_QD_Grip_Pod,
        Bottom_Ribbed_Stubby,
        Bottom_Ribbed_Vertical,
        Bottom_Slim_Angled,
        Bottom_Slim_Handstop,
        Bottom_Stippled_Stubby,
        Bottom_Underslung_Mount,
        Bottom_VIS_IR_Light,
        Ergonomic_DLC_Bolt,
        Ergonomic_Improved_Mag_Catch,
        Ergonomic_Magwell_Flare,
        Ergonomic_Match_Trigger,
        Ergonomic_Rail_Cover,
        Left_120_mW_Blue,
        Left_5_mW_Green,
        Left_5_mW_Red,
        Left_50_mW_Blue,
        Left_50_mW_Green,
        Left_Flashlight,
        Left_Range_Finder,
        Left_VIS_IR_Light,
        Magazine_100rnd_Belt_Box,
        Magazine_100rnd_Belt_Pouch,
        Magazine_100rnd_Drum_Mag,
        Magazine_10rnd_Fast_Mag,
        Magazine_10rnd_Magazine,
        Magazine_11rnd_Magazine,
        Magazine_15rnd_Fast_Mag,
        Magazine_15rnd_Magazine,
        Magazine_17rnd_Fast_Mag,
        Magazine_17rnd_Magazine,
        Magazine_200rnd_Belt_Box,
        Magazine_20rnd_Fast_Mag,
        Magazine_20rnd_Magazine,
        Magazine_21rnd_Magazine,
        Magazine_22rnd_Magazine,
        Magazine_23rnd_Magazine,
        Magazine_25rnd_Fast_Mag,
        Magazine_25rnd_Magazine,
        Magazine_27rnd_Magazine,
        Magazine_30rnd_Fast_Mag,
        Magazine_30rnd_Magazine,
        Magazine_36rnd_Magazine,
        Magazine_4_Shell_Tube,
        Magazine_40rnd_Fast_Mag,
        Magazine_40rnd_Magazine,
        Magazine_41rnd_Magazine,
        Magazine_45rnd_Fast_Mag,
        Magazine_45rnd_Magazine,
        Magazine_4rnd_Fast_Mag,
        Magazine_4rnd_Magazine,
        Magazine_5_Shell_Tube,
        Magazine_50rnd_Belt_Pouch,
        Magazine_50rnd_Loose_Belt,
        Magazine_50rnd_Magazine,
        Magazine_5rnd_Fast_Mag,
        Magazine_5rnd_Magazine,
        Magazine_6_Shell_Tube,
        Magazine_60rnd_Drum_Mag,
        Magazine_60rnd_Magazine,
        Magazine_6rnd_Speedloader,
        Magazine_7_Shell_Dual_Tubes,
        Magazine_7_Shell_Tube,
        Magazine_75rnd_Belt_Box,
        Magazine_75rnd_Drum,
        Magazine_7rnd_Magazine,
        Magazine_8rnd_Fast_Mag,
        Magazine_8rnd_Magazine,
        Magazine_8rnd_Moon_Clip,
        Magazine_8rnd_Speedloader,
        Muzzle_Compensated_Brake,
        Muzzle_CQB_Suppressor,
        Muzzle_Double_port_Brake,
        Muzzle_Flash_Hider,
        Muzzle_Lightened_Suppressor,
        Muzzle_Linear_Comp,
        Muzzle_Long_Suppressor,
        Muzzle_Single_port_Brake,
        Muzzle_Slant_Brake,
        Muzzle_Standard_Suppressor,
        Muzzle_Thread_Protector,
        Muzzle_Triple_port_Brake,
        Right_120_mW_Blue,
        Right_5_mW_Green,
        Right_5_mW_Red,
        Right_50_mW_Blue,
        Right_50_mW_Green,
        Right_Flashlight,
        Right_Laser_Light_Combo_Green,
        Right_Laser_Light_Combo_Red,
        Right_Range_Finder,
        Right_VIS_IR_Light,
        Scope_1p87_150x,
        Scope_1p88_Variable,
        Scope_2Pro_125x,
        Scope_3VZR_175x,
        Scope_A_P2_175x,
        Scope_Adjustable_Magnification_200x,
        Scope_Adjustable_Magnification_300x,
        Scope_Adjustable_Magnification_400x,
        Scope_Anti_Glare_Coating,
        Scope_Aperture_Sight,
        Scope_Baker_300x,
        Scope_BF_2M_250x,
        Scope_Canted_Iron_Sights,
        Scope_CCO_200x,
        Scope_CQ_RDS_125x,
        Scope_CQB_Sights,
        Scope_DVO_LPVO,
        Scope_GRIM_150x,
        Scope_Iron_Sights,
        Scope_LDS_450x,
        Scope_LERT_800x,
        Scope_Mars_F_LPVO,
        Scope_MC_CO_LPVO,
        Scope_Mini_Flex_100x,
        Scope_NFX_800x,
        Scope_NGFC_LPVO,
        Scope_Osa_7_100x,
        Scope_PAS_35_300x,
        Scope_Piggyback_Reflex,
        Scope_PVQ_31_400x,
        Scope_R_MR_100x,
        Scope_R_VPS_1000x,
        Scope_R4T_200x,
        Scope_RO_M_175x,
        Scope_RO_S_125x,
        Scope_ROX_150x,
        Scope_S_VPS_600x,
        Scope_SDO_350x,
        Scope_SF_G2_500x,
        Scope_SM_Rifle_Variable,
        Scope_SSDS_600x,
        Scope_ST_Prism_500x,
        Scope_SU_123_150x,
        Scope_SU_230_LPVO,
        Scope_TS_HD_600x,
        Top_120_mW_Blue,
        Top_5_mW_Green,
        Top_5_mW_Red,
        Top_50_mW_Blue,
        Top_50_mW_Green,
    }
    export enum Weapons {
        AssaultRifle_AK4D,
        AssaultRifle_B36A4,
        AssaultRifle_KORD_6P67,
        AssaultRifle_L85A3,
        AssaultRifle_M433,
        AssaultRifle_NVO_228E,
        AssaultRifle_SOR_556_Mk2,
        AssaultRifle_TR_7,
        AssaultRifle_VCR_2,
        BattlePickup_MP_RMG,
        BattlePickup_Rorsch_Mk_2_SMRW,
        Carbine_AK_205,
        Carbine_GRT_BC,
        Carbine_M277,
        Carbine_M417_A2,
        Carbine_M4A1,
        Carbine_QBZ_192,
        Carbine_SG_553R,
        Carbine_SOR_300SC,
        DMR_GRT_CPS,
        DMR_LMR27,
        DMR_M39_EMR,
        DMR_SVDM,
        DMR_SVK_86,
        LMG_DRS_IAR,
        LMG_KTS100_MK8,
        LMG_L110,
        LMG_M_60,
        LMG_M121_A2,
        LMG_M123K,
        LMG_M240L,
        LMG_M250,
        LMG_RPKM,
        Shotgun__185KS_K,
        Shotgun_DB_12,
        Shotgun_M1014,
        Shotgun_M87A1,
        Sidearm_ES_57,
        Sidearm_GGH_22,
        Sidearm_M357_Trait,
        Sidearm_M44,
        Sidearm_M45A1,
        Sidearm_P18,
        Sidearm_VZ_61,
        SMG_CZ3A1,
        SMG_KV9,
        SMG_PW5A3,
        SMG_PW7A2,
        SMG_SCW_10,
        SMG_SGX,
        SMG_SL9,
        SMG_UMG_40,
        SMG_USG_90,
        Sniper_M2010_ESR,
        Sniper_Mini_Scout,
        Sniper_PSR,
        Sniper_SV_98,
    }
    export enum WorldIconImages {
        Alert,
        Assist,
        Bomb,
        BombArmed,
        Cross,
        DangerPing,
        Diffuse,
        EMP,
        Explosion,
        Eye,
        FilledPing,
        Flag,
        Hazard,
        Skull,
        SquadPing,
        Triangle,
    }
}
