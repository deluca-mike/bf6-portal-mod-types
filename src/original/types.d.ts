declare namespace mod {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    export type Any = any;
    export type SoldierKits = Any;
    // export type AreaTrigger = never;
    // export type AreaTrigger = Any;
    const AreaTriggerSymbol: unique symbol;
    export type AreaTrigger = { _opaque: typeof AreaTriggerSymbol };

    // export type Array = never;
    // export type Array = Any;
    const ArraySymbol: unique symbol;
    export type Array = { _opaque: typeof ArraySymbol };

    // export type CapturePoint = never;
    // export type CapturePoint = Any;
    const CapturePointSymbol: unique symbol;
    export type CapturePoint = { _opaque: typeof CapturePointSymbol };

    // export type DamageType = never;
    // export type DamageType = Any;
    const DamageTypeSymbol: unique symbol;
    export type DamageType = { _opaque: typeof DamageTypeSymbol };

    // export type DeathType = never;
    // export type DeathType = Any;
    const DeathTypeSymbol: unique symbol;
    export type DeathType = { _opaque: typeof DeathTypeSymbol };

    // export type EmplacementSpawner = never;
    // export type EmplacementSpawner = Any;
    const EmplacementSpawnerSymbol: unique symbol;
    export type EmplacementSpawner = { _opaque: typeof EmplacementSpawnerSymbol };

    // export type HQ = never;
    // export type HQ = Any;
    const HQSymbol: unique symbol;
    export type HQ = { _opaque: typeof HQSymbol };

    // export type InteractPoint = never;
    // export type InteractPoint = Any;
    const InteractPointSymbol: unique symbol;
    export type InteractPoint = { _opaque: typeof InteractPointSymbol };

    // export type LootSpawner = never;
    // export type LootSpawner = Any;
    const LootSpawnerSymbol: unique symbol;
    export type LootSpawner = { _opaque: typeof LootSpawnerSymbol };

    // export type MCOM = never;
    // export type MCOM = Any;
    const MCOMSymbol: unique symbol;
    export type MCOM = { _opaque: typeof MCOMSymbol };

    // export type Message = never;
    // export type Message = Any;
    const MessageSymbol: unique symbol;
    export type Message = { _opaque: typeof MessageSymbol };

    // export type Player = never;
    // export type Player = Any;
    const PlayerSymbol: unique symbol;
    export type Player = { _opaque: typeof PlayerSymbol };

    // export type PortalEnum = never;
    // export type PortalEnum = Any;
    const PortalEnumSymbol: unique symbol;
    export type PortalEnum = { _opaque: typeof PortalEnumSymbol };

    // export type RingOfFire = never;
    // export type RingOfFire = Any;
    const RingOfFireSymbol: unique symbol;
    export type RingOfFire = { _opaque: typeof RingOfFireSymbol };

    // export type SFX = never;
    // export type SFX = Any;
    const SFXSymbol: unique symbol;
    export type SFX = { _opaque: typeof SFXSymbol };

    // export type ScreenEffect = never;
    // export type ScreenEffect = Any;
    const ScreenEffectSymbol: unique symbol;
    export type ScreenEffect = { _opaque: typeof ScreenEffectSymbol };

    // export type Sector = never;
    // export type Sector = Any;
    const SectorSymbol: unique symbol;
    export type Sector = { _opaque: typeof SectorSymbol };

    // export type SpatialObject = never;
    // export type SpatialObject = Any;
    const SpatialObjectSymbol: unique symbol;
    export type SpatialObject = { _opaque: typeof SpatialObjectSymbol };

    // export type SpawnPoint = never;
    // export type SpawnPoint = Any;
    const SpawnPointSymbol: unique symbol;
    export type SpawnPoint = { _opaque: typeof SpawnPointSymbol };

    // export type Spawner = never;
    // export type Spawner = Any;
    const SpawnerSymbol: unique symbol;
    export type Spawner = { _opaque: typeof SpawnerSymbol };

    // export type Squad = never;
    // export type Squad = Any;
    const SquadSymbol: unique symbol;
    export type Squad = { _opaque: typeof SquadSymbol };

    // export type Team = never;
    // export type Team = Any;
    const TeamSymbol: unique symbol;
    export type Team = { _opaque: typeof TeamSymbol };

    // export type Transform = never;
    // export type Transform = Any;
    const TransformSymbol: unique symbol;
    export type Transform = { _opaque: typeof TransformSymbol };

    // export type UIWidget = never;
    // export type UIWidget = Any;
    const UIWidgetSymbol: unique symbol;
    export type UIWidget = { _opaque: typeof UIWidgetSymbol };

    // export type VFX = never;
    // export type VFX = Any;
    const VFXSymbol: unique symbol;
    export type VFX = { _opaque: typeof VFXSymbol };

    // export type VO = never;
    // export type VO = Any;
    const VOSymbol: unique symbol;
    export type VO = { _opaque: typeof VOSymbol };

    // export type Variable = never;
    // export type Variable = Any;
    const VariableSymbol: unique symbol;
    export type Variable = { _opaque: typeof VariableSymbol };

    // export type Vector = never;
    // export type Vector = Any;
    const VectorSymbol: unique symbol;
    export type Vector = { _opaque: typeof VectorSymbol };

    // export type Vehicle = never;
    // export type Vehicle = Any;
    const VehicleSymbol: unique symbol;
    export type Vehicle = { _opaque: typeof VehicleSymbol };

    // export type VehicleSpawner = never;
    // export type VehicleSpawner = Any;
    const VehicleSpawnerSymbol: unique symbol;
    export type VehicleSpawner = { _opaque: typeof VehicleSpawnerSymbol };

    // export type WaypointPath = never;
    // export type WaypointPath = Any;
    const WaypointPathSymbol: unique symbol;
    export type WaypointPath = { _opaque: typeof WaypointPathSymbol };

    // export type WeaponPackage = never;
    // export type WeaponPackage = Any;
    const WeaponPackageSymbol: unique symbol;
    export type WeaponPackage = { _opaque: typeof WeaponPackageSymbol };

    // export type WeaponUnlock = never;
    // export type WeaponUnlock = Any;
    const WeaponUnlockSymbol: unique symbol;
    export type WeaponUnlock = { _opaque: typeof WeaponUnlockSymbol };

    // export type WorldIcon = never;
    // export type WorldIcon = Any;
    const WorldIconSymbol: unique symbol;
    export type WorldIcon = { _opaque: typeof WorldIconSymbol };

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
