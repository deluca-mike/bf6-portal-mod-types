declare namespace mod {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type Any = any;
    export type SoldierKits = Any;
    // export type AreaTrigger = never;
    // export type AreaTrigger = Any;
    const AreaTriggerSymbol: unique symbol;
    /**
     * The AreaTrigger opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.AreaTrigger, ...args) as mod.AreaTrigger`.
     */
    export type AreaTrigger = { _opaque: typeof AreaTriggerSymbol };

    // export type Array = never;
    // export type Array = Any;
    const ArraySymbol: unique symbol;
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
    export type Array = { _opaque: typeof ArraySymbol };

    // export type CapturePoint = never;
    // export type CapturePoint = Any;
    const CapturePointSymbol: unique symbol;
    /**
     * The CapturePoint opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.CapturePoint, ...args) as mod.CapturePoint`.
     */
    export type CapturePoint = { _opaque: typeof CapturePointSymbol };

    // export type DamageType = never;
    // export type DamageType = Any;
    const DamageTypeSymbol: unique symbol;
    /**
     * The DamageType opaque type.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be compared with `EventDamageTypeCompare`.
     */
    export type DamageType = { _opaque: typeof DamageTypeSymbol };

    // export type DeathType = never;
    // export type DeathType = Any;
    const DeathTypeSymbol: unique symbol;
    /**
     * The DeathType opaque type.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be compared with `EventDeathTypeCompare`.
     */
    export type DeathType = { _opaque: typeof DeathTypeSymbol };

    // export type EmplacementSpawner = never;
    // export type EmplacementSpawner = Any;
    const EmplacementSpawnerSymbol: unique symbol;
    /**
     * The EmplacementSpawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Cannot be spawned at runtime.
     */
    export type EmplacementSpawner = { _opaque: typeof EmplacementSpawnerSymbol };

    // export type HQ = never;
    // export type HQ = Any;
    const HQSymbol: unique symbol;
    /**
     * The HQ opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Cannot be spawned at runtime.
     */
    export type HQ = { _opaque: typeof HQSymbol };

    // export type InteractPoint = never;
    // export type InteractPoint = Any;
    const InteractPointSymbol: unique symbol;
    /**
     * The InteractPoint opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.InteractPoint, ...args) as mod.InteractPoint`.
     */
    export type InteractPoint = { _opaque: typeof InteractPointSymbol };

    // export type LootSpawner = never;
    // export type LootSpawner = Any;
    const LootSpawnerSymbol: unique symbol;
    /**
     * The LootSpawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.LootSpawner, ...args) as mod.LootSpawner`.
     */
    export type LootSpawner = { _opaque: typeof LootSpawnerSymbol };

    // export type MCOM = never;
    // export type MCOM = Any;
    const MCOMSymbol: unique symbol;
    /**
     * The MCOM opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.MCOM, ...args) as mod.MCOM`.
     */
    export type MCOM = { _opaque: typeof MCOMSymbol };

    // export type Message = never;
    // export type Message = Any;
    const MessageSymbol: unique symbol;
    /**
     * The Message opaque type. It can never be converted to or used as a normal string.
     * TODO: Determine if it can be compared with `mod.Equals`.
     */
    export type Message = { _opaque: typeof MessageSymbol };

    // export type Player = never;
    // export type Player = Any;
    const PlayerSymbol: unique symbol;
    /**
     * The Player opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     */
    export type Player = { _opaque: typeof PlayerSymbol };

    // export type PortalEnum = never;
    // export type PortalEnum = Any;
    const PortalEnumSymbol: unique symbol;
    /**
     * The PortalEnum opaque type. This has no currently known use.
     * TODO: Determine if it can be compared with `mod.Equals`.
     */
    export type PortalEnum = { _opaque: typeof PortalEnumSymbol };

    // export type RingOfFire = never;
    // export type RingOfFire = Any;
    const RingOfFireSymbol: unique symbol;
    /**
     * The RingOfFire opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.RingOfFire, ...args) as mod.RingOfFire`.
     */
    export type RingOfFire = { _opaque: typeof RingOfFireSymbol };

    // export type SFX = never;
    // export type SFX = Any;
    const SFXSymbol: unique symbol;
    /**
     * The SFX opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_SFX, ...args) as mod.SFX`.
     */
    export type SFX = { _opaque: typeof SFXSymbol };

    // export type ScreenEffect = never;
    // export type ScreenEffect = Any;
    const ScreenEffectSymbol: unique symbol;
    /**
     * The ScreenEffect opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * TODO: Determine if it is deprecated.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_SCREEN_EFFECT, ...args) as mod.ScreenEffect`.
     */
    export type ScreenEffect = { _opaque: typeof ScreenEffectSymbol };

    // export type Sector = never;
    // export type Sector = Any;
    const SectorSymbol: unique symbol;
    /**
     * The Sector opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.Sector, ...args) as mod.Sector`.
     */
    export type Sector = { _opaque: typeof SectorSymbol };

    // export type SpatialObject = never;
    // export type SpatialObject = Any;
    const SpatialObjectSymbol: unique symbol;
    /**
     * The SpatialObject opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_SPATIAL_OBJECT, ...args) as mod.SpatialObject`.
     */
    export type SpatialObject = { _opaque: typeof SpatialObjectSymbol };

    // export type SpawnPoint = never;
    // export type SpawnPoint = Any;
    const SpawnPointSymbol: unique symbol;
    /**
     * The SpawnPoint opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.PlayerSpawner, ...args) as mod.SpawnPoint`.
     */
    export type SpawnPoint = { _opaque: typeof SpawnPointSymbol };

    // export type Spawner = never;
    // export type Spawner = Any;
    const SpawnerSymbol: unique symbol;
    /**
     * The Spawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.AI_Spawner, ...args) as mod.Spawner`.
     */
    export type Spawner = { _opaque: typeof SpawnerSymbol };

    // export type Squad = never;
    // export type Squad = Any;
    const SquadSymbol: unique symbol;
    /**
     * The Squad opaque type. Currently, it cannot be compared at all, not even with `mod.Equals`.
     * It cannot have its id retrieved either with `mod.GetObjId`.
     */
    export type Squad = { _opaque: typeof SquadSymbol };

    // export type Team = never;
    // export type Team = Any;
    const TeamSymbol: unique symbol;
    /**
     * The Team opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     */
    export type Team = { _opaque: typeof TeamSymbol };

    // export type Transform = never;
    // export type Transform = Any;
    const TransformSymbol: unique symbol;
    /**
     * The Transform opaque type. Can be created with `mod.CreateTransform`.
     * It defines a transformation (position and rotation) in 3D space that can be applied to a `mod.Object`.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if its id can be retrieved with `mod.GetObjId`.
     */
    export type Transform = { _opaque: typeof TransformSymbol };

    // export type UIWidget = never;
    // export type UIWidget = Any;
    const UIWidgetSymbol: unique symbol;
    /**
     * The UIWidget opaque type.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if its id can be retrieved with `mod.GetObjId`.
     */
    export type UIWidget = { _opaque: typeof UIWidgetSymbol };

    // export type VFX = never;
    // export type VFX = Any;
    const VFXSymbol: unique symbol;
    /**
     * The VFX opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_ANY.SOME_VFX, ...args) as mod.VFX`.
     */
    export type VFX = { _opaque: typeof VFXSymbol };

    // export type VO = never;
    // export type VO = Any;
    const VOSymbol: unique symbol;
    /**
     * The VO opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * TODO: Determine how to get a VO.
     */
    export type VO = { _opaque: typeof VOSymbol };

    // export type Variable = never;
    // export type Variable = Any;
    const VariableSymbol: unique symbol;
    /**
     * The Variable opaque type. This is a special type that can be used to store any type of value in the Global context, or on certain `mod.Object` types.
     * If you are writing an experience in pure TypeScript, you will not need to use this type. However, this is the only way
     * to store and retrieve values within the Block Editor, so it can be used to pass values between TypeScript and Blocks.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if its id can be retrieved with `mod.GetObjId`.
     */
    export type Variable = { _opaque: typeof VariableSymbol };

    // export type Vector = never;
    // export type Vector = Any;
    const VectorSymbol: unique symbol;
    /**
     * The Vector opaque type. Can be created with `mod.CreateVector`. It defines a 3D vector with X, Y, and Z components.
     * It can only be compared with `mod.Equals`.
     * It's X, Y, and Z values can be retrieved with `mod.XComponentOf`, `mod.YComponentOf`, and `mod.ZComponentOf` respectively.
     */
    export type Vector = { _opaque: typeof VectorSymbol };

    // export type Vehicle = never;
    // export type Vehicle = Any;
    const VehicleSymbol: unique symbol;
    /**
     * The Vehicle opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can only be spawned with a `mod.VehicleSpawner` or a `mod.EmplacementSpawner`.
     */
    export type Vehicle = { _opaque: typeof VehicleSymbol };

    // export type VehicleSpawner = never;
    // export type VehicleSpawner = Any;
    const VehicleSpawnerSymbol: unique symbol;
    /**
     * The VehicleSpawner opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.VehicleSpawner, ...args) as mod.VehicleSpawner`.
     */
    export type VehicleSpawner = { _opaque: typeof VehicleSpawnerSymbol };

    // export type WaypointPath = never;
    // export type WaypointPath = Any;
    const WaypointPathSymbol: unique symbol;
    /**
     * The WaypointPath opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * TODO: Determine how to get a WaypointPath.
     */
    export type WaypointPath = { _opaque: typeof WaypointPathSymbol };

    // export type WeaponPackage = never;
    // export type WeaponPackage = Any;
    const WeaponPackageSymbol: unique symbol;
    /**
     * The WeaponPackage opaque type. Can only be compared with `mod.Equals`.
     * TODO: Determine if it can be retrieved with `mod.GetObjId`.
     * Can only be created with `mod.CreateWeaponPackage`.
     */
    export type WeaponPackage = { _opaque: typeof WeaponPackageSymbol };

    // export type WeaponUnlock = never;
    // export type WeaponUnlock = Any;
    const WeaponUnlockSymbol: unique symbol;
    /**
     * The WeaponUnlock opaque type.
     * This seems to be the weapon involved in a `mod.OnPlayerDamaged`, `mod.OnPlayerDied`, and `mod.OnPlayerEarnedKill` event,
     * but it is unclear how to check it to determine the actual weapon involved.
     * TODO: Determine if it can be compared with `mod.Equals`.
     * TODO: Determine if it can be retrieved with `mod.GetObjId`.
     */
    export type WeaponUnlock = { _opaque: typeof WeaponUnlockSymbol };

    // export type WorldIcon = never;
    // export type WorldIcon = Any;
    const WorldIconSymbol: unique symbol;
    /**
     * The WorldIcon opaque type. Can only be compared with `mod.Equals`, or by retrieving its id with `mod.GetObjId`.
     * World icons appear overlaid on a player's screen, but do not shop up on the big map or minimap.
     * Can be spawned at runtime with `mod.SpawnObject(RuntimeSpawn_Common.WorldIcon, ...args) as mod.WorldIcon`.
     */
    export type WorldIcon = { _opaque: typeof WorldIconSymbol };

    /**
     * The Object type is the union of all other object types. They can be compared with `mod.Equals`, or by retrieving their id with `mod.GetObjId`.
     */
    export type Object =
        | AreaTrigger
        | CapturePoint
        | EmplacementSpawner
        | HQ
        | InteractPoint
        | LootSpawner
        | MCOM
        | Player
        | RingOfFire
        | ScreenEffect
        | Sector
        | SFX
        | SpatialObject
        | Spawner
        | SpawnPoint
        | Team
        | Vehicle
        | VehicleSpawner
        | VFX
        | VO
        | WaypointPath
        | WorldIcon;
}
