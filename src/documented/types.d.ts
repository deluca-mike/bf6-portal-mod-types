declare namespace documentedMod {
    /* eslint-disable @typescript-eslint/no-empty-object-type */
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
    /* eslint-enable @typescript-eslint/no-empty-object-type */
}
