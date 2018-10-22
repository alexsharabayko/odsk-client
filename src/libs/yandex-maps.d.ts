// Type definitions for yandex-maps 2.1
// Project: https://github.com/Delagen/typings-yandex-maps
// Definitions by: Delagen <https://github.com/Delagen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export namespace ymaps {
  interface IClassConstructor<T> {
    new(): T;
  }

  type ControlSingleKey =
    'fullscreenControl'
    | 'geolocationControl'
    | 'routeEditor'
    | 'rulerControl'
    | 'searchControl'
    | 'trafficControl'
    | 'typeSelector'
    | 'zoomControl';
  type ControlSetKey = 'smallMapDefaultSet' | 'mediumMapDefaultSet' | 'largeMapDefaultSet' | 'default';
  type ControlKey = ControlSingleKey | ControlSetKey;

  type OverlayKey =
    'default#placemark'
    | 'default#pin'
    | 'default#circle'
    | 'default#rectangle'
    | 'default#polyline'
    | 'default#polygon'
    |
    'hotspot#placemark'
    | 'hotspot#circle'
    | 'hotspot#rectangle'
    | 'hotspot#polyline'
    | 'hotspot#polygon'
    | 'html#balloon'
    | 'html#hint'
    |
    'html#placemark'
    | 'html#rectangle'
    |
    string
    | IClassConstructor<IOverlay>
    | ((geometry: IPixelLineStringGeometry,
        data: IDataManager | object,
        options: object) => Promise<string | IClassConstructor<IOverlay>>);
  type InteractivityModelKey =
    'default#opaque'
    | 'default#geoObject'
    | 'default#layer'
    | 'default#transparent'
    | 'default#silent'
    | string;

  type PresetKey = string;

  namespace behavior {
    class DblClickZoom implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: IDblClickZoomOptions);

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): IControlParent | null;

      public setParent(parent: IControlParent): this;
    }

    interface IDblClickZoomOptions extends IMapMarginOptions {
      centering?: boolean;
      duration?: number;
    }

    class Drag implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: IDragOptions)

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IDragOptions {
      actionCursor?: string;
      cursor?: string;
      inertia?: boolean;
      inertiaDuration?: number;
      tremor?: number;
    }

    class LeftMouseButtonMagnifier implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: ILeftMouseButtonMagnifierOptions)

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface ILeftMouseButtonMagnifierOptions {
      actionCursor?: string;
      cursor?: string;
      duration?: number;
    }

    class MultiTouch implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: IMultiTouchOptions)

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IMultiTouchOptions {
      tremor?: number;
    }

    class RightMouseButtonMagnifier implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: IRightMouseButtonMagnifierOptions)

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IRightMouseButtonMagnifierOptions {
      actionCursor?: string;
      duration?: number;
    }

    class RouteEditor implements IBehavior {
      public events: IEventManager;
      public options: IOptionManager;

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public getRoute(): router.Route;

      public getState(): string;

      public setState(state: string | null): void;
    }

    class Ruler implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: IRulerOptions)

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public close(): boolean;

      public getState(): string;

      public setState(state: string | null): void;
    }

    interface IRulerOptions {
      balloonAutoPan?: boolean;
    }

    class ScrollZoom implements IBehavior {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: IScrollZoomOptions)

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IScrollZoomOptions {
      maximumDelta?: number;
      speed?: number;
    }

    const storage: util.Storage;
  }

  namespace clusterer {
    class Balloon implements IBalloonManager<Clusterer> { // tslint:disable-line no-shadowed-variable

      public events: IEventManager;

      constructor(clusterer: Clusterer);

      public autoPan(): Promise<Clusterer>;

      public close(force?: boolean): Promise<Clusterer>;

      public destroy(): void;

      public getData(): object | null;

      public getOptions(): IOptionManager | null;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getPosition(): number[] | null;

      public isOpen(): boolean;

      public open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Clusterer>;

      public setData(data: object | string | HTMLElement): Promise<Clusterer>;

      public setOptions(options: object): Promise<Clusterer>;

      public setPosition(position: number[]): Promise<Clusterer>;
    }

    class Hint implements IHintManager<Clusterer> {

      public events: IEventManager;

      constructor(clusterer: Clusterer);

      public close(force?: boolean): Promise<Clusterer>;

      public destroy(): void;

      public getData(): object | null;

      public getOptions(): IOptionManager | null;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getPosition(): number[] | null;

      public isOpen(): boolean;

      public open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Clusterer>;

      public setData(data: object | string | HTMLElement): Promise<Clusterer>;

      public setOptions(options: object): Promise<Clusterer>;

      public setPosition(position: number[]): Promise<Clusterer>;
    }
  }

  namespace collection {
    class Item implements IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {

      public events: IEventManager;
      public options: IOptionManager;

      constructor(options?: object);

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public getMap(): Map;

      public onAddToMap(map: Map): void;

      public onRemoveFromMap(oldMap: Map): void;
    }
  }

  namespace control {
    class Button implements ICustomizable, ISelectableControl {

      public options: IOptionManager;
      public events: IEventManager;
      public data: data.Manager;
      public state: data.Manager;

      constructor(parameters?: IButtonParameters | string);

      public deselect(): void;

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public isSelected(): boolean;

      public select(): void;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IBaseButtonParametersOptions {
      adjustMapMargin?: boolean;
      float?: 'none' | 'left' | 'right';
      floatIndex?: number;
      layout?: IClassConstructor<ISelectableControlLayout> | string;
      maxWidth?: number[][] | number[] | number;
      position?: {
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
        top?: number | string;
      };
      visible?: boolean;
    }

    interface IButtonParameters {
      data?: {
        content?: string;
        image?: string;
        title?: string;
      };
      options?: IBaseButtonParametersOptions & {
        selectOnClick?: boolean;
        size?: 'auto' | 'small' | 'medium' | 'large';
      };
      state?: {
        enabled?: boolean;
        selected?: boolean;
      };
    }

    class FullscreenControl extends Button {
      constructor(parameters?: IFullscreenControlParameters);

      public enterFullscreen(): void;

      public exitFullscreen(): void;
    }

    interface IFullscreenControlParameters {
      data?: {
        title?: string;
      };
      options?: IBaseButtonParametersOptions & {
        collapseOnBlur?: boolean;
        expandOnClick?: boolean;
        popupFloat?: 'left' | 'right';
      };
      state?: {
        expanded?: boolean;
      };
    }

    class GeolocationControl extends Button {
      constructor(parameters?: IGeolocationControlParameters);
    }

    interface IGeolocationControlParameters extends IButtonParameters {
      data?: {
        image?: string;
        title?: string;
      };
      options?: IBaseButtonParametersOptions;
    }

    class ListBox implements ICollection, IControl, ICustomizable {

      public events: IEventManager;
      public options: IOptionManager;
      public data: data.Manager;
      public state: data.Manager;

      constructor(parameters?: IListBoxParameters);

      public add(object: object): this;

      public getIterator(): IIterator;

      public remove(object: object): this;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IListBoxParameters extends IButtonParameters {
      options?: IBaseButtonParametersOptions & {
        noPlacemark?: boolean;
      };
    }

    class ListBoxItem implements ICustomizable, ISelectableControl {

      public options: IOptionManager;
      public events: IEventManager;
      public data: data.Manager;
      public state: data.Manager;

      constructor(parameters?: IListBoxItemParameters);

      public deselect(): void;

      public disable(): void;

      public enable(): void;

      public isEnabled(): boolean;

      public isSelected(): boolean;

      public select(): void;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public getMap(): Map;
    }

    interface IListBoxItemParameters {
      data?: {
        content?: string;
      };
      options?: {
        layout?: string | IClassConstructor<ISelectableControlLayout>;
        selectableLayout?: string | IClassConstructor<ISelectableControlLayout>;
        selectOnClick?: boolean;
        separatorLayout?: string | IClassConstructor<ISelectableControlLayout>;
        type?: 'selectable' | 'separator';
        visible?: boolean;
      };
      state?: {
        selected?: boolean;
      };
    }

    class Manager {

      public events: event.Manager;
      public options: option.Manager;
      public state: data.Manager;

      constructor(map: Map, controls?: Array<string | IControl>, options?: IManagerOptions);

      public add(control: IControl | ControlKey, options?: IManagerControlOptions): this;

      public each(callback: (control: IControl) => void, context: object): this;

      public get(index: number | string): IControl | null;

      public getChildElement(control: IControl): Promise<HTMLElement>;

      public getContainer(): HTMLElement;

      public getMap(): Map;

      public indexOf(childToFind: IControl | string): number;

      public remove(control: IControl | string): this;
    }

    interface IManagerOptions {
      margin?: number;
      pane?: IPane;
      states?: string[];
    }

    interface IManagerControlOptions {
      float?: 'none' | 'left' | 'right';
      floatIndex?: number;
      position?: {
        bottom?: number | string;
        left?: number | string;
        right?: number | string;
        top?: number | string;
      };
    }

    class RouteButton implements IControl, ICustomizable {

      public events: IEventManager;
      public options: IOptionManager;
      public routePanel: IRoutePanel;

      constructor(parameters?: IRouteButtonParameters);

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;
    }

    interface IRouteButtonParameters {
      options?: {
        adjustMapMargin?: boolean;
        collapseOnBlur?: boolean;
        float?: 'none' | 'left' | 'right';
        floatIndex?: number;
        popupAnimate?: boolean;
        popupFloat?: 'auto' | 'left' | 'right';
        popupWidth?: string;
        position?: {
          bottom?: number | string;
          left?: number | string;
          right?: number | string;
          top?: number | string;
        };
        size?: 'auto' | 'small' | 'medium' | 'large';
        visible?: boolean;
      };
      state?: {
        expanded?: boolean;
      };
    }

    class RouteEditor extends Button {
      constructor(parameters?: IRouteEditorParameters);

      public getRoute(): router.Route;
    }

    interface IRouteEditorParameters {
      data?: {
        image?: string;
        title?: string;
      };
      options?: IBaseButtonParametersOptions;
      state?: {};
    }

    class RulerControl extends Button {
      constructor(parameters?: IRulerControlParameters);
    }

    interface IRulerControlParameters {
      data?: {};
      options?: {
        adjustMapMargin?: boolean;
        position?: {
          bottom?: number | string;
          left?: number | string;
          right?: number | string;
          top?: number | string;
        };
        scaleLine?: boolean;
        visible?: boolean;
      };
      state?: {};
    }

    class SearchControl implements IControl, ICustomizable {

      public events: IEventManager;
      public options: IOptionManager;
      public state: data.Manager;

      constructor(parameters?: ISearchControlParameters);

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public clear(): void;

      public getMap(): Map;

      public getRequestString(): string;

      public getResponseMetaData(): object;

      public getResult(index: number): Promise<object>;

      public getResultsArray(): object[];

      public getResultsCount(): number;

      public getSelectedIndex(): number;

      public hideResult(): void;

      public search(request: string): Promise<void>;

      public showResult(index: number): this;
    }

    interface ISearchControlParameters {
      data?: {};
      options?: {
        adjustMapMargin?: boolean;
        boundedBy?: number[][];
        fitMaxWidth?: boolean;
        float?: 'none' | 'left' | 'right';
        floatIndex?: number;
        formLayout?: string | IClassConstructor<ILayout>;
        kind?: 'house' | 'street' | 'metro' | 'district' | 'locality';
        layout?: string | IClassConstructor<ISearchControlLayout>;
        maxWidth?: number[][] | number[] | number;
        noCentering?: boolean;
        noPlacemark?: boolean;
        noPopup?: boolean;
        noSelect?: boolean;
        noSuggestPanel?: boolean;
        placeholderContent?: string;
        popupItemLayout?: string | IClassConstructor<ILayout>;
        popupLayout?: string | IClassConstructor<ILayout>;
        position?: {
          bottom?: number | string;
          left?: number | string;
          right?: number | string;
          top?: number | string;
        };
        provider?: IGeocodeProvider | 'yandex#map' | 'yandex#search';
        searchCoordOrder?: 'latlong' | 'longlat';
        size?: 'auto' | 'small' | 'medium' | 'large';
        strictBounds?: boolean;
        suppressYandexSearch?: boolean;
        useMapBounds?: boolean;
        zoomMargin?: number;
        visible?: boolean;
      };
      state?: {};
    }
  }

  namespace data {
    class Manager implements IDataManager, IFreezable {

      public events: IEventManager;

      constructor(data?: object);

      public get(path: string, defaultValue: object): object;

      public getAll(): object;

      public set(path: object | string, value: object): this;

      public setAll(): this;

      public unset(path: object | string): this;

      public unsetAll(): this;

      public freeze(): IFreezable;

      public isFrozen(): boolean;

      public unfreeze(): IFreezable;

      public add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public getParent(): IEventManager | null;

      public group(): IEventGroup;

      public remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public setParent(parent: IEventManager | null): this;

      public fire(type: string, eventobject: object | IEvent): this;
    }
  }

  namespace event {
    class Manager implements IEventManager {
      constructor(params?: { context?: object; controllers?: IEventWorkflowController[]; parent?: IEventManager });

      public add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public getParent(): IEventManager | null;

      public group(): IEventGroup;

      public remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public setParent(parent: IEventManager | null): this;

      public fire(type: string, eventobject: object | IEvent): this;

      public createEventobject(type: string, event: object, target: object): Event;

      public once(types: string[][] | string[] | string, callback: (event: IEvent) => any, context?: object, priority?: number): this;
    }
  }

  namespace geometry {
    namespace base {
      class LineString implements IBaseLineStringGeometry { // tslint:disable-line no-shadowed-variable
        public static fromEncodedCoordinates(encodedCoordinates: string): geometry.LineString; // tslint:disable-line function-name

        public static toEncodedCoordinates(geometry: geometry.LineString): string; // tslint:disable-line function-name

        public events: IEventManager;

        public getBounds(): number[][] | null;

        public getType(): string;

        public get(index: number): number[];

        public getChildGeometry(index: number): IPointGeometryAccess;

        public getClosest(anchorPosition: number[]): object;

        public getCoordinates(): number[][];

        public getLength(): number;

        public insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

        public remove(index: number): number[];

        public remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

        public set(index: number, coordinates: number[]): ILineStringGeometryAccess;

        public setCoordinates(coordinates: number[]): ILineStringGeometryAccess;

        public splice(index: number, length: number): number[][];

        public freeze(): IFreezable;

        public isFrozen(): boolean;

        public unfreeze(): IFreezable;

        public add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

        public getParent(): object | null;

        public group(): IEventGroup;

        public setParent(parent: IEventManager | null): this;

        public fire(type: string, eventobject: object | IEvent): this;
      }

      class Point implements IBasePointGeometry { // tslint:disable-line no-shadowed-variable
        public events: IEventManager;

        public getBounds(): number[][] | null;

        public getType(): string;

        public getCoordinates(): number[] | null;

        public setCoordinates(coordinates: number[] | null): this;
      }
    }

    class LineString implements ILineStringGeometry {

      public static fromEncodedCoordinates(encodedCoordinates: string): LineString; // tslint:disable-line function-name

      public static toEncodedCoordinates(geometry: LineString): string; // tslint:disable-line function-name

      public events: IEventManager;
      public options: IOptionManager;

      constructor(coordinates?: number[][], options?: {
        coordRendering?: 'shortestPath' | 'straightPath';
        geodesic?: boolean;
        pixelRendering?: 'jumpy' | 'static';
        projection?: IProjection;
        simplification?: boolean;
      });

      public getMap(): Map | null;

      public getPixelGeometry(options?: object): IPixelGeometry;

      public setMap(map: Map): void;

      public getBounds(): number[][] | null;

      public getType(): string;

      public get(index: number): number[];

      public getChildGeometry(index: number): IPointGeometryAccess;

      public getClosest(anchorPosition: number[]): object;

      public getCoordinates(): number[][];

      public getLength(): number;

      public insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

      public remove(index: number): number[];

      public remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public set(index: number, coordinates: number[]): ILineStringGeometryAccess;

      public setCoordinates(coordinates: number[]): ILineStringGeometryAccess;

      public splice(index: number, length: number): number[][];

      public freeze(): IFreezable;

      public isFrozen(): boolean;

      public unfreeze(): IFreezable;

      public add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public getParent(): object | null;

      public group(): IEventGroup;

      public setParent(parent: IEventManager | null): this;

      public fire(type: string, eventobject: object | IEvent): this;
    }

    class Point implements IPointGeometry {

      public options: IOptionManager;
      public events: IEventManager;

      constructor(coordinates?: number[] | null);

      public getMap(): Map | null;

      public getPixelGeometry(options?: object): IPixelGeometry;

      public setMap(map: Map): void;

      public getBounds(): number[][] | null;

      public getType(): string;

      public getCoordinates(): number[] | null;

      public setCoordinates(coordinates: number[] | null): this;
    }
  }

  namespace geoObject {
    class Balloon implements IBalloonManager<GeoObject> { // tslint:disable-line no-shadowed-variable

      public events: IEventManager;

      constructor(geoObject: GeoObject);

      public autoPan(): Promise<GeoObject>;

      public close(force?: boolean): Promise<GeoObject>;

      public destroy(): void;

      public getData(): object | null;

      public getOptions(): IOptionManager | null;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getPosition(): number[] | null;

      public isOpen(): boolean;

      public open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<GeoObject>;

      public setData(data: object | string | HTMLElement): Promise<GeoObject>;

      public setOptions(options: object): Promise<GeoObject>;

      public setPosition(position: number[]): Promise<GeoObject>;
    }

    class Hint implements IHintManager<GeoObject> {

      public events: IEventManager;

      constructor(geoObject: GeoObject);

      public close(force?: boolean): Promise<GeoObject>;

      public destroy(): void;

      public getData(): object | null;

      public getOptions(): IOptionManager | null;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getPosition(): number[] | null;

      public isOpen(): boolean;

      public open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<GeoObject>;

      public setData(data: object | string | HTMLElement): Promise<GeoObject>;

      public setOptions(options: object): Promise<GeoObject>;

      public setPosition(position: number[]): Promise<GeoObject>;
    }

    class Sequence implements IGeoObject, IGeoObjectSequence {

      public geometry: IGeometry | null;
      public properties: IDataManager;
      public state: IDataManager;
      public events: IEventManager;
      public options: IOptionManager;

      constructor(geoObject: GeoObject);

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public getMap(): Map;

      public each(callback: (geoObject: IGeoObject) => void, context?: object): void;

      public get(index: number): IGeoObject;

      public getBounds(): number[][] | null;

      public getIterator(): IIterator;

      public getLength(): number;

      public getPixelBounds(): number[][] | null;

      public indexOf(geoObject: IGeoObject): number;
    }
  }

  namespace layout {
    namespace templateBased {
      class Base implements ILayout {

        public events: IEventManager;

        constructor(data: object);

        public destroy(): void;

        public getData(): object;

        public getParentElement(): HTMLElement;

        public getShape(): IShape | null;

        public isEmpty(): boolean;

        public setData(data: object): void;

        public setParentElement(parent: HTMLElement | null): this;

        public build(): void;

        public clear(): void;

        public onSublayoutSizeChange(sublayoutInfo: object, nodeSizeByContent: object): void;

        public rebuild(): void;
      }
    }
  }

  namespace map {
    namespace action {
      class Manager implements IEventEmitter {

        public events: IEventManager;

        constructor(map: Map);

        public breakTick(): void;

        public execute(action: IMapAction): void;

        public getCurrentState(): object;

        public getMap(): Map;

        public setCorrection(userFunction: () => void): void;

        public stop(): void;
      }
    }

    namespace behavior { // tslint:disable-line no-shadowed-variable
      class Manager implements ICustomizable, IEventEmitter, IParentOnMap {

        public options: IOptionManager;
        public events: IEventManager;

        constructor(map: Map, behaviors?: string[][] | string[], options?: object);

        public getMap(): Map;

        public disable(behaviors: string[][] | string[] | string): this;

        public enable(behaviors: string[][] | string[] | string): this;

        public get(behaviorName: string): IBehavior;

        public isEnabled(behaviorName: string): boolean;
      }
    }

    namespace layer {
      class Manager implements ILayer, IMapObjectCollection {

        public events: IEventManager;
        public options: IOptionManager;

        constructor(map: Map, options?: {
          trafficImageZIndex?: number;
          trafficInfoZIndex?: number;
          trafficJamZIndex?: number;
        });

        public getParent(): null | IControlParent;

        public setParent(parent: IControlParent): this;

        public add(object: object): this;

        public getIterator(): IIterator;

        public remove(object: object): this;

        public getMap(): Map;
      }
    }

    namespace margin {
      class Accessor {
        constructor(screenArea: object);

        public getArea(): object;

        public remove(): this;

        public setArea(screenArea: object): this;
      }

      class Manager {
        constructor(map: Map);

        public addArea(screenArea: object): Accessor;

        public destroy(): this;

        public getMargin(): number[];

        public getOffset(): number[];

        public setDefaultMargin(margin: number[][] | number[] | number): void;
      }
    }

    namespace pane {
      class Manager {
        constructor(map: Map);

        public append(key: string, pane: IPane): void;

        public destroy(): void;

        public get(key: string): IPane | null;

        public getLower(): string;

        public getUpper(): string;

        public insertBefore(key: string, pane: IPane, referenceKey: string): void;

        public remove(pane: IPane): void;
      }
    }

    class Balloon implements IBalloonManager<Balloon>/*, IBalloonSharingManager*/ { // tslint:disable-line no-shadowed-variable

      public events: IEventManager;

      constructor(map: Map);

      public autoPan(): Promise<Balloon>;

      public close(force?: boolean): Promise<Balloon>;

      public destroy(): void;

      public getData(): object | null;

      public getOptions(): IOptionManager | null;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getPosition(): number[] | null;

      public isOpen(): boolean;

      public open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Balloon>;

      public setData(data: object | string | HTMLElement): Promise<Balloon>;

      public setOptions(options: object): Promise<Balloon>;

      public setPosition(position: number[]): Promise<Balloon>;
    }

    class Container implements IDomEventEmitter {

      public events: IEventManager;

      constructor(parentElement: string | HTMLElement);

      public enterFullscreen(): void;

      public exitFullscreen(): void;

      public fitToViewport(preservePixelPosition?: boolean): void;

      public getElement(): HTMLElement;

      public getOffset(): number[];

      public getParentElement(): HTMLElement;

      public getSize(): number[];

      public isFullscreen(): boolean;
    }

    class Converter {
      constructor(map: Map);

      public globalToPage(globalPixelPoint: number[]): number[];

      public pageToGlobal(pagePixelPoint: number[]): number[];
    }

    class Copyrights {
      constructor(map: Map);

      public add(customCopyrights: string | HTMLElement | Array<string | HTMLElement>): ICopyrightsAccessor;

      public addProvider(provider: ICopyrightsProvider): this;

      public get(point?: number[], zoom?: number): Promise<Array<string | HTMLElement>>;

      public getPromoLink(): string;

      public removeProvider(provider: ICopyrightsProvider): this;
    }

    class GeoObjects implements IGeoObjectCollection {

      public options: IOptionManager;
      public events: IEventManager;

      constructor(map: Map, options?: object);

      public add(child: IGeoObject, index?: number): this;

      public each(callback: (object: IGeoObject) => void, context: object): void;

      public get(index: number): IGeoObject;

      public getBounds(): number[][] | null;

      public getIterator(): IIterator;

      public getLength(): number;

      public getPixelBounds(): number[][] | null;

      public indexOf(object: IGeoObject): number;

      public remove(child: IGeoObject): this;

      public removeAll(): this;

      public set(index: number, child: IGeoObject): this;

      public splice(index: number, length: number): this;

      public getMap(): Map;
    }

    class Hint implements IHintManager<Hint>/*, IHintSharingManager*/ {

      public events: IEventManager;

      constructor(map: Map);

      public close(force?: boolean): Promise<Hint>;

      public destroy(): void;

      public getData(): object | null;

      public getOptions(): IOptionManager | null;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getPosition(): number[] | null;

      public isOpen(): boolean;

      public open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<Hint>;

      public setData(data: object | string | HTMLElement): Promise<Hint>;

      public setOptions(options: object): Promise<Hint>;

      public setPosition(position: number[]): Promise<Hint>;
    }

    class ZoomRange implements IEventEmitter {

      public events: IEventManager;

      constructor(map: Map, constraints: number[]);

      public get(coords?: number[]): Promise<number[]>;

      public getCurrent(): number[];
    }
  }

  namespace multiRouter {
    namespace driving {
      class Path implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public state: IDataManager;
        public model: PathModel;
        public events: IEventManager;
        public options: IOptionManager;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;

        public getSegments(): GeoObjectCollection;
      }

      class PathModel implements IEventEmitter {
        public events: IEventManager;
        public properties: data.Manager;
        public route: RouteModel;

        public destroy(): void;

        public getSegments(): SegmentModel[];

        public getType(): string;

        public update(pathJson: object): void;
      }

      class Route implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: IDataManager;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;

        public getPaths(): GeoObjectCollection;
      }

      class RouteModel implements IEventEmitter {
        public events: IEventManager;
        public multiRoute: MultiRouteModel;
        public properties: data.Manager;

        public destroy(): void;

        public getPaths(): PathModel[];

        public update(routeJson: object): void;

        public getType(): string;
      }

      class Segment implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;
      }

      class SegmentModel implements IEventEmitter {
        public events: IEventManager;
        public geometry: geometry.base.LineString;
        public path: PathModel;

        public destroy(): void;

        public getType(): string;

        public getViaPoints(): ViaPointModel[];

        public update(segmentJson: object): void;
      }
    }

    namespace masstransit {
      class Path implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;
        public model: PathModel;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;

        public getSegmentMarkers(): GeoObjectCollection;

        public getSegments(): GeoObjectCollection;
      }

      class PathModel implements IEventEmitter {
        public events: IEventManager;
        public properties: data.Manager;
        public route: RouteModel;

        public destroy(): void;

        public getSegments(): Array<TransferSegmentModel | TransportSegmentModel | WalkSegmentModel>;

        public getType(): string;

        public update(pathJson: object): void;
      }

      class Route implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public model: RouteModel;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;

        public getPaths(): GeoObjectCollection;
      }

      class RouteModel implements IEventEmitter {
        public events: IEventManager;
        public multiRoute: MultiRouteModel;
        public properties: data.Manager;

        public destroy(): void;

        public getPaths(): PathModel[];

        public getType(): string;

        public update(routeJson: object): void;
      }

      class StopModel implements IEventEmitter {
        public events: IEventManager;
        public geometry: geometry.base.Point;
        public properties: data.Manager;
        public segment: TransportSegmentModel;

        public update(stopJson: object): void;
      }

      class TransferSegment implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;
        public model: TransferSegmentModel;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;
      }

      class TransferSegmentModel implements IEventEmitter {
        public events: IEventManager;
        public geometry: geometry.base.LineString;
        public path: PathModel;
        public properties: data.Manager;

        public destroy(segmentJson: object): void;

        public getType(): string;
      }

      class TransportSegment implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;
        public model: TransportSegmentModel;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;
      }

      class TransportSegmentModel implements IEventEmitter {
        public events: IEventManager;
        public geometry: geometry.base.LineString;
        public path: PathModel;
        public properties: data.Manager;

        public destroy(): void;

        public getStops(): StopModel[];

        public getType(): string;

        public update(segmentJson: object): void;
      }

      class WalkSegment implements IGeoObject {
        public geometry: IGeometry | null;
        public properties: data.Manager;
        public state: IDataManager;
        public events: IEventManager;
        public options: IOptionManager;
        public model: WalkSegmentModel;

        public getOverlay(): Promise<IOverlay | null>;

        public getOverlaySync(): IOverlay | null;

        public getParent(): object | null;

        public setParent(parent: object): this;

        public getMap(): Map;
      }

      class WalkSegmentModel implements IEventEmitter {
        public events: IEventManager;
        public geometry: geometry.base.LineString;
        public path: PathModel;
        public properties: data.Manager;

        public destroy(): void;

        public getType(): string;
      }
    }

    class EditorAddon implements ICustomizable, IEventEmitter {
      public options: IOptionManager;
      public events: IEventManager;
      public state: data.Manager;

      public isActive(): boolean;

      public start(state: object): void;

      public stop(): void;
    }

    class MultiRoute implements IGeoObject {

      public editor: EditorAddon;
      public model: MultiRouteModel;
      public geometry: IGeometry | null;
      public properties: IDataManager;
      public state: IDataManager;
      public events: IEventManager;
      public options: IOptionManager;

      constructor(model: MultiRouteModel | IMultiRouteModelJson, options?: {
        activeRouteAutoSelection?: boolean;
        boundsAutoApply?: boolean;
        dragUpdateInterval?: string | number;
        preventDragUpdate?: boolean;
        useMapMargin?: boolean;
        zoomMargin?: number[][] | number[] | number;
        [index: string]: any;
      });

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getParent(): object | null;

      public setParent(parent: object): this;

      public getMap(): Map;

      public getActiveRoute(): driving.Route | masstransit.Route | null;

      public getBounds(): number[][] | null;

      public getPixelBounds(): number[][] | null;

      public getRoutes(): GeoObjectCollection;

      public getViaPoints(): GeoObjectCollection;

      public getWayPoints(): GeoObjectCollection;

      public setActiveRoute(route: driving.Route | masstransit.Route | null): void;
    }

    class MultiRouteModel implements IEventEmitter {

      public events: IEventManager;
      public properties: data.Manager;

      constructor(referencePoints: IMultiRouteReferencePoint[], params?: IMultiRouteParams);

      public destroy(): void;

      public getAllPoints(): Array<WayPointModel | ViaPointModel>;

      public getJson(): object;

      public getParams(): IMultiRouteParams;

      public getPoints(): Array<WayPointModel | ViaPointModel>;

      public getReferencePointIndexes(): object;

      public getReferencePoints(): IMultiRouteReferencePoint[];

      public getRoutes(): driving.RouteModel[] | masstransit.RouteModel[];

      public getViaPoints(): ViaPointModel[];

      public getWayPoints(): WayPointModel[];

      public setParams(params: IMultiRouteParams, extend?: boolean, clearRequests?: boolean): void;

      public setReferencePoints(referencePoints: IMultiRouteReferencePoint[], viaIndexes?: number[], clearRequests?: boolean): void;
    }

    class ViaPoint implements IGeoObject {
      public geometry: IGeometry | null;
      public properties: data.Manager;
      public state: IDataManager;
      public events: IEventManager;
      public options: IOptionManager;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getParent(): object | null;

      public setParent(parent: object): this;

      public getMap(): Map;
    }

    class ViaPointModel implements IEventEmitter {
      public events: IEventManager;
      public geometry: geometry.base.Point;
      public multiRoute: MultiRouteModel;
      public properties: data.Manager;

      public destroy(): void;

      public getReferencePoint(): object;

      public getReferencePointIndex(): number;

      public setReferencePoint(referencePoint: object): void;

      public update(viaPointJson: object): void;
    }

    class WayPoint implements IGeoObject {
      public geometry: IGeometry | null;
      public properties: data.Manager;
      public state: IDataManager;
      public events: IEventManager;
      public options: IOptionManager;
      public model: WayPointModel;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getParent(): object | null;

      public setParent(parent: object): this;

      public getMap(): Map;
    }

    class WayPointModel implements IEventEmitter {
      public events: IEventManager;
      public geometry: geometry.base.Point;
      public multiRoute: MultiRouteModel;
      public properties: data.Manager;

      public destroy(): void;

      public getReferencePoint(): object;

      public getReferencePointIndex(): number;

      public setReferencePoint(referencePoint: object): void;

      public update(wayPointJson: object): void;
    }
  }

  namespace option {
    class Manager implements IOptionManager {

      public events: IEventManager;

      constructor(options?: object, parent?: IOptionManager, name?: string);

      public get(key: string, defaultValue: object): object;

      public getAll(): object;

      public getName(): string;

      public getNative(key: string): object;

      public resolve(key: string, name?: string): object;

      public set(key: object | string, value?: object): this;

      public unset(keys: string[][] | string[] | string): this;

      public unsetAll(): this;

      public setName(name: string): void;

      public getParent(): null | IOptionManager;

      public setParent(parent: IOptionManager): this;

      public freeze(): IFreezable;

      public isFrozen(): boolean;

      public unfreeze(): IFreezable;

      public add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public group(): IEventGroup;

      public remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

      public fire(type: string, eventobject: object | IEvent): this;
    }
  }

  namespace panorama {
    class Manager implements IEventEmitter {
      public events: IEventManager;

      public closePlayer(): void;

      public disableLookup(): void;

      public enableLookup(): void;

      public getPlayer(): Player;

      public isLookupEnabled(): boolean;

      public openPlayer(panorama: IPanorama[] | number): Promise<void>;
    }

    class Player implements IEventEmitter {

      public events: IEventManager;

      constructor(element: HTMLElement | string, panorama: IPanorama, options?: {
        autoFitToViewport?: 'none' | 'ifNull' | 'always';
        controls?: string[];
        direction?: number[] | string;
        hotkeysEnabled?: boolean;
        scrollZoomBehavior?: boolean;
        span?: number[] | string;
        suppressMapOpenBlock?: boolean;
      })

      public destroy(): void;

      public fitToViewport(): void;

      public getDirection(): number[];

      public getPanorama(): IPanorama;

      public getSpan(): number[];

      public lookAt(point: number[]): this;

      public moveTo(point: number[], options?: {
        direction?: number[] | string;
        layer?: 'yandex#panorama' | 'yandex#airPanorama';
        span?: number[] | string;
      }): Promise<void>;

      public setDirection(direction: number[] | string): this;

      public setPanorama(panorama: IPanorama): this;

      public setSpan(span: number[] | string): this;
    }
  }

  namespace router {
    class Editor implements ICustomizable, IEventEmitter {
      public options: IOptionManager;
      public events: IEventManager;

      public start(options?: {
        addViaPoints?: boolean;
        addWayPoints?: boolean;
        editViaPoints?: boolean;
        editWayPoints?: boolean;
        removeViaPoints?: boolean;
        removeWayPoints?: boolean;
      }): void;

      public stop(): void;
    }

    abstract class Route implements IGeoObject {
      public geometry: IGeometry | null;
      public properties: IDataManager;
      public state: IDataManager;
      public events: IEventManager;
      public options: IOptionManager;
      public editor: Editor;

      public getOverlay(): Promise<IOverlay | null>;

      public getOverlaySync(): IOverlay | null;

      public getParent(): null | IControlParent;

      public setParent(parent: IControlParent): this;

      public getMap(): Map;

      public getHumanJamsTime(): string;

      public getHumanLength(): string;

      public getHumanTime(): string;

      public getJamsTime(): number;

      public getLength(): number;

      public getPaths(): GeoObjectCollection;

      public getTime(): number;

      public getViaPoints(): GeoObjectCollection;

      public getWayPoints(): GeoObjectCollection;
    }
  }

  class Balloon extends Popup<Balloon> implements IBaloon<Balloon> {
    constructor(map: Map, options?: IBalloonOptions);

    public getData(): object;

    public close(force?: boolean): Promise<Balloon>;

    public getParent(): Balloon | null;

    public setParent(parent: Balloon): this;

    public autoPan(): Promise<Balloon>;

    public freeze(): IFreezable;

    public isFrozen(): boolean;

    public unfreeze(): IFreezable;

    public add(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

    public group(): IEventGroup;

    public remove(types: string[][] | string[] | string, callback: (event: (object | IEvent)) => void, context?: object, priority?: number): this;

    public fire(type: string, eventobject: object | IEvent): this;
  }

  interface IBalloonOptions {
    autoPan?: boolean;
    autoPanCheckZoomRange?: boolean;
    autoPanDuration?: number;
    autoPanMargin?: number[][] | number[] | number;
    autoPanUseMapMargin?: boolean;
    closeButton?: boolean;
    contentLayout?: IClassConstructor<ILayout> | string;
    layout?: IClassConstructor<ILayout> | string;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    offset?: number[];
    pane?: string;
    panelContentLayout?: IClassConstructor<ILayout> | string;
    panelMaxHeightRatio?: number;
    panelMaxMapArea?: number;
    shadow?: boolean;
    shadowLayout?: IClassConstructor<ILayout> | string;
    shadowOffset?: number[];
  }

  class Circle implements GeoObject {

    public balloon: geoObject.Balloon;
    public editor: IGeometryEditor;
    public hint: geoObject.Hint;
    public events: event.Manager;
    public options: option.Manager;
    public properties: data.Manager;
    public state: data.Manager;

    public geometry: IGeometry | null;
    public indices: ArrayBuffer;
    public vertices: ArrayBuffer;

    constructor(geometry: ICircleGeometry[][][][] | number[][] | object, properties?: object | IDataManager, options?: ICircleOptions)

    public getOverlay(): Promise<IOverlay | null>;

    public getOverlaySync(): IOverlay | null;

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    public getMap(): Map;
  }

  interface ICircleOptions {
    circleOverlay?: string | ((geometry: IPixelCircleGeometry, data: object, options: object) => Promise<IOverlay>);
    cursor?: string;
    draggable?: boolean;
    fill?: boolean;
    fillColor?: string;
    fillImageHref?: string;
    fillMethod?: 'stretch' | 'tile';
    fillOpacity?: number;
    hasBalloon?: boolean;
    hasHint?: boolean;
    hideIconOnBalloonOpen?: boolean;
    interactiveZIndex?: boolean;
    interactivityModel?: InteractivityModelKey;
    opacity?: number;
    openBalloonOnClick?: boolean;
    openEmptyBalloon?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    outline?: boolean;
    pane?: string;
    strokeColor?: string[][] | string[] | string;
    strokeOpacity?: number[][] | number[] | number;
    strokeStyle?: string[][][] | object[][] | string[] | object[] | string | object;
    strokeWidth?: number[][] | number[] | number;
    syncOverlayInit?: boolean;
    useMapMarginInDragging?: boolean;
    visible?: boolean;
    zIndex?: number;
    zIndexActive?: number;
    zIndexDrag?: number;
    zIndexHover?: number;
  }

  class Clusterer implements IChildOnMap, ICustomizable, IEventEmitter, IParentOnMap {

    public events: IEventManager;
    public options: IOptionManager;
    public balloon: clusterer.Balloon;
    // 	balloonopen:
    public hint: clusterer.Hint;

    constructor(options?: IClustererOptions);

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    // balloonclose:

    public getMap(): Map;
  }

  interface IClustererOptions {
    gridSize?: number;
    groupByCoordinates?: boolean;
    hasBalloon?: boolean;
    hasHint?: boolean;
    margin?: number[][] | number[] | number;
    maxZoom?: number[] | number;
    minClusterSize?: number;
    preset?: PresetKey;
    showInAlphabeticalOrder?: boolean;
    useMapMargin?: boolean;
    viewportMargin?: number[][] | number[] | number;
    zoomMargin?: number[][] | number[] | number;
  }

  class ClusterPlacemark implements IGeoObject, collection.Item {

    public geometry: IGeometry | null;
    public properties: IDataManager;
    public events: IEventManager;
    public options: IOptionManager;
    public state: data.Manager;

    constructor(geometry: number[] | object | IPointGeometry, properties: IClusterPlacemarkProperties, options?: IClusterPlacemarkOptions);

    public getOverlay(): Promise<IOverlay | null>;

    public getOverlaySync(): IOverlay | null;

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    public getMap(): Map;

    public onAddToMap(map: Map): void;

    public onRemoveFromMap(oldMap: Map): void;

    public getBounds(): number[][] | null;

    public getGeoObjects(): IGeoObject[];
  }

  interface IClusterPlacemarkProperties extends IDataManager {
    geoObjects: IGeoObject[];
  }

  interface IClusterPlacemarkOptions {
    balloonContentLayout?: 'cluster#balloonTwoColumns' | 'cluster#balloonCarousel' | 'cluster#balloonAccordion' | string | IClassConstructor<ILayout>;
    balloonContentLayoutHeight?: number;
    balloonContentLayoutWidth?: number;
    balloonItemContentLayout?: ILayout | string;
    balloonPanelContentLayout?: string | IClassConstructor<ILayout>;
    cursor?: string;
    disableClickZoom?: boolean;
    hideIconOnBalloonOpen?: boolean;
    iconColor?: string;
    iconContentLayout?: string | IClassConstructor<ILayout>;
    iconLayout?: string | IClassConstructor<ILayout>;
    icons?: Array<{
      href: string;
      size: number[];
      ooffset: number[];
      shape?: IShape | IGeometryJson;
    }>;
    iconShape?: IGeometryJson;
    interactivityModel?: InteractivityModelKey;
    numbers?: number[];
    openBalloonOnClick?: boolean;
    openEmptyHint?: boolean;
    openHintOnHover?: boolean;
    zIndexHover?: number;
  }

  class Collection implements ICollection, collection.Item {

    public events: IEventManager;
    public options: IOptionManager;

    constructor(options?: object);

    public add(object: object): this;

    public getIterator(): IIterator;

    public remove(object: object): this;

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    public getMap(): Map;

    public onAddToMap(map: Map): void;

    public onRemoveFromMap(oldMap: Map): void;

    public filter(filterFunction: (object: object) => boolean): object[];

    public get(index: number): object;

    public getAll(): object[];

    public getLength(): number;

    public indexOf(childToFind: object): number;

    public removeAll(): this;
  }

  class Event implements IEvent {
    constructor(originalEvent: object, sourceEvent: IEvent);

    public allowMapEvent(): void;

    public callMethod(name: string): void;

    public get(name: string): object;

    public getSourceEvent(): IEvent | null;

    public isDefaultPrevented(): boolean;

    public isImmediatePropagationStopped(): boolean;

    public isMapEventAllowed(): boolean;

    public isPropagationStopped(): boolean;

    public preventDefault(): boolean;

    public stopImmediatePropagation(): boolean;

    public stopPropagation(): boolean;
  }

  class GeoObject implements IGeoObject {

    public geometry: IGeometry | null;
    public balloon: geoObject.Balloon;
    public editor: IGeometryEditor;
    public hint: geoObject.Hint;
    public events: event.Manager;
    public options: option.Manager;
    public properties: data.Manager;
    public state: data.Manager;

    constructor(feature?: IGeoObjectFeature, options?: IGeoObjectOptions);

    public getOverlay(): Promise<IOverlay | null>;

    public getOverlaySync(): IOverlay | null;

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    public getMap(): Map;
  }

  interface IGeoObjectFeature {
    geometry?: IGeometry | IGeometryJson;
    properties?: IDataManager | object;
  }

  interface IGeoObjectOptions extends ICircleOptions {
    iconCaptionMaxWidth?: number;
    iconColor?: string;
    iconContentLayout?: string | IClassConstructor<ILayout>;
    iconContentOffset?: number[];
    iconContentPadding?: number[];
    iconContentSize?: number[];
    iconImageClipRect?: number[][];
    iconImageHref?: string;
    iconImageOffset?: number[];
    iconImageShape?: IShape | null;
    iconImageSize?: number[];
    iconLayout?: string | IClassConstructor<ILayout>;
    iconMaxHeight?: number;
    iconMaxWidth?: number;
    iconOffset?: number[];
    iconShadow?: boolean;
    iconShadowImageClipRect?: number[][];
    iconShadowImageHref?: string;
    iconShadowImageOffset?: number[];
    iconShadowImageSize?: number[];
    iconShadowLayout?: string | IClassConstructor<ILayout>;
    iconShadowOffset?: number[];
    lineStringOverlay?: OverlayKey;
    pointOverlay?: OverlayKey;
    polygonOverlay?: OverlayKey;
    preset?: string;
    rectangleOverlay?: OverlayKey;
    setMapCursorInDragging?: boolean;
  }

  class GeoObjectCollection implements IGeoObject, IGeoObjectCollection {

    public geometry: IGeometry | null;
    public properties: IDataManager;
    public state: IDataManager;
    public events: IEventManager;
    public options: IOptionManager;

    constructor(feature?: {
      children?: IGeoObject[];
      geometry?: IGeometry | object;
      properties?: IDataManager | object;
    }, options?: object);

    public getOverlay(): Promise<IOverlay | null>;

    public getOverlaySync(): IOverlay | null;

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    public getMap(): Map;

    public add(child: IGeoObject, index?: number): this;

    public each(callback: (object: IGeoObject) => void, context: object): void;

    public get(index: number): IGeoObject;

    public getBounds(): number[][] | null;

    public getIterator(): IIterator;

    public getLength(): number;

    public getPixelBounds(): number[][] | null;

    public indexOf(object: IGeoObject): number;

    public remove(child: IGeoObject): this;

    public removeAll(): this;

    public set(index: number, child: IGeoObject): this;

    public splice(index: number, length: number): this;

    public toArray(): IGeoObject[];
  }

  class Layer implements ILayer, IParentOnMap, IPositioningContext {

    public events: IEventManager;
    public options: IOptionManager;

    constructor(tileUrlTemplate: string | ((tileNumber: number[], tileZoom: number) => string));

    public fromClientPixels(clientPixelPoint: number[]): number[];

    public getZoom(): number;

    public toClientPixels(globalPixelPoint: number[]): number[];

    public getParent(): null | IControlParent;

    public setParent(parent: IControlParent): this;

    public getMap(): Map;
  }

  class Map implements IDomEventEmitter {

    public action: map.action.Manager;
    public balloon: map.Balloon;
    public behaviors: map.behavior.Manager;
    public container: map.Container;
    public controls: control.Manager;
    public converter: map.Converter;
    public copyrights: map.Copyrights;
    public cursors: util.cursor.Manager;
    public events: event.Manager;
    public geoObjects: map.GeoObjects;
    public hint: map.Hint;
    public layers: map.layer.Manager;
    public margin: map.margin.Manager;
    public options: option.Manager;
    public panes: map.pane.Manager;
    public zoomRange: map.ZoomRange;

    constructor(parentElement: HTMLElement | string, state: IMapState, options?: IMapOptions)

    public destroy(): void;

    public getBounds(options?: IMapMarginOptions): number[][];

    public getCenter(options?: IMapMarginOptions): number[];

    public getGlobalPixelCenter(options?: IMapMarginOptions): number[];

    public getPanoramaManager(): Promise<panorama.Manager>;

    public getType(): string | MapType;

    public getZoom(): number;

    public panTo(center: number[] | object[], options?: IMapPanOptions): Promise<void>;

    public setBounds(bounds: number[][], options?: IMapBoundsOptions): Promise<void>;

    public setCenter(center: number[], zoom?: number, options?: IMapPositionOptions): Promise<void>;

    public setGlobalPixelCenter(globalPixelCenter: number[], zoom?: number, options?: IMapPositionOptions): Promise<void>;

    public setType(type: string | MapType, options?: IMapCheckZoomRangeOptions): Promise<void>;

    public setZoom(zoom: number, options?: IMapZoomOptions): Promise<void>;
  }

  interface IMapMarginOptions {
    useMapMargin?: boolean;
  }

  interface IMapCheckZoomRangeOptions {
    checkZoomRange?: boolean;
  }

  interface IMapZoomOptions extends IMapMarginOptions, IMapCheckZoomRangeOptions {
    duration?: number;
  }

  interface IMapPositionOptions extends IMapZoomOptions {
    timingFunction?: string;
  }

  interface IMapBoundsOptions extends IMapPositionOptions {
    preciseZoom?: boolean;
    zoomMargin?: number[][] | number[];
  }

  interface IMapPanOptions extends IMapPositionOptions {
    delay?: number;
    flying?: boolean;
    safe?: boolean;
  }

  class MapType {
    constructor(name: string, layers: Array<IClassConstructor<Layer> | string>)
  }

  interface IMapState {
    behaviors?: string[];
    bounds?: number[][];
    center?: number[];
    controls?: string[];
    margin?: number[][] | number[];
    type?: 'yandex#map' | 'yandex#satellite' | 'yandex#hybrid';
    zoom?: number;
  }

  interface IMapOptions {
    autoFitToViewport?: 'none' | 'ifNull' | 'always';
    avoidFractionalZoom?: boolean;
    exitFullscreenByEsc?: boolean;
    fullscreenZIndex?: number;
    mapAutoFocus?: boolean;
    maxAnimationZoomDifference?: number;
    maxZoom?: number;
    minZoom?: number;
    nativeFullscreen?: boolean;
    projection?: IProjection;
    restrictMapArea?: boolean;
    suppressMapOpenBlock?: boolean;
    suppressObsoleteBrowserNotifier?: boolean;
    yandexMapAutoSwitch?: boolean;
    yandexMapDisablePoiInteractivity?: boolean;
  }

  class Placemark extends GeoObject {
    constructor(geometry: number[] | object | IPointGeometry, properties: object | IDataManager, options?: IPlacemarkOptions)
  }

  interface IPlacemarkOptions {
    cursor?: string;
    draggable?: boolean;

    [index: string]: any;
  }

  class Popup<T> implements IPopup<T> {

    public options: IOptionManager;
    public events: IEventManager;

    constructor(map: Map, options?: IPopupOptions);

    public close(force?: boolean): Promise<T>;

    public getData(): object;

    public getOverlay(): Promise<IOverlay>;

    public getOverlaySync(): IOverlay;

    public getPosition(): number[];

    public isOpen(): boolean;

    public open(position: number[], data: object | string | HTMLElement): Promise<T>;

    public setData(data: object | string | HTMLElement): Promise<T>;

    public setPosition(position: number[]): Promise<T>;
  }

  interface IPopupOptions {
    closeTimeout?: number;
    interactivityModel?: InteractivityModelKey;
    openTimeout?: number;
    pane?: IPane | string;
    projection?: IProjection;
    zIndex?: number;
  }

  function ready(successCallback?: () => any | IReadyobject, errorCallback?: () => any, context?: object): Promise<void>;

  interface IReadyobject {
    require?: string[];
    context?: object;

    successCallback?(): void;

    errorCallback?(): void;
  }

  namespace templateLayoutFactory {
    function createClass(template: string, overrides?: object, staticMethods?: object): IClassConstructor<layout.templateBased.Base>;
  }

  namespace util {
    namespace cursor {
      class Accessor {
        constructor(key: string);

        public getKey(): string;

        public remove(): void;

        public setKey(): void;
      }

      class Manager {
        constructor(element: HTMLElement);

        public push(key: string): Accessor;
      }
    }

    class Storage {
      public add(key: string, object: object): this;

      public get(key: string | object): object | string;

      public remove(key: string): object;
    }
  }

  /*Interfaces*/

  interface IBaloon<T> extends IPopup<T>, ICustomizable, IChild<T>, IFreezable {
    autoPan(): Promise<T>;
  }

  interface IBalloonManager<T> extends IPopupManager<T> {
    autoPan(): Promise<T>;
  }

  interface IBaseGeometry extends IEventEmitter {
    getBounds(): number[][] | null;

    getType(): string;
  }

  interface IBaseLineStringGeometry extends IBaseGeometry, ILineStringGeometryAccess {// tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IBasePointGeometry extends IBaseGeometry, IPointGeometryAccess {// tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IBehavior extends IChildOnMap, ICustomizable {
    disable(): void;

    enable(): void;

    isEnabled(): boolean;
  }

  interface IChild<T> extends IEventEmitter {
    getParent(): object | null;

    setParent(parent: object | null): this;
  }

  interface IChildOnMap extends IChild<IControlParent> { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface ICircleGeometry extends ICircleGeometryAccess, IGeometry { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface ICircleGeometryAccess extends IFreezable {
    contains(position: number[]): boolean;

    getClosest(anchorPosition: number[]): object;

    getCoordinates(): number[] | null;

    getRadius(): number;

    setCoordinates(coordinates: number[] | null): this;

    setRadius(radius: number): this;
  }

  interface ICollection extends IEventEmitter {
    add(object: object): this;

    getIterator(): IIterator;

    remove(object: object): this;
  }

  interface IControl extends IChildOnMap { // tslint:disable-line no-empty-interface no-empty-interfaces
    // new (options?: object);
  }

  interface IControlParent extends IParentOnMap {
    getChildElement(child: IControl): Promise<HTMLElement>;
  }

  interface ICoordSystem {
    getDistance(point1: number[], point2: number[]): number;

    solveDirectProblem(startPoint: number[], direction: number[], distance: number): object;

    solveInverseProblem(startPoint: number[], endPoint: number[], reverseDirection?: boolean): object;
  }

  interface ICopyrightsAccessor extends ICopyrightsProvider { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface ICopyrightsProvider extends IEventEmitter {
    getCopyrights(coords: number[], zoom: number): Promise<Array<string | HTMLElement>>;

    remove(): void;

    setCopyrights(copyrights: string | HTMLElement | Array<string | HTMLElement>): void;
  }

  interface ICustomizable extends IEventEmitter {
    options: IOptionManager;
  }

  interface IDataManager extends IEventEmitter {
    get(path: string, defaultValue: object): object;
  }

  interface IDomEventEmitter extends IEventEmitter { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IEvent {
    allowMapEvent(): void;

    callMethod(name: string): void;

    get(name: string): object;

    getSourceEvent(): IEvent | null;

    isDefaultPrevented(): boolean;

    isImmediatePropagationStopped(): boolean;

    isMapEventAllowed(): boolean;

    isPropagationStopped(): boolean;

    preventDefault(): boolean;

    stopImmediatePropagation(): boolean;

    stopPropagation(): boolean;
  }

  interface IEventController {
    onStartListening?(events: IEventManager, type: string): void;

    onStopListening?(events: IEventManager, type: string): void;
  }

  interface IEventEmitter {
    events: IEventManager;
  }

  interface IEventGroup {
    add(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

    remove(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

    removeAll(): this;
  }

  interface IEventManager extends IEventTrigger {
    add(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

    getParent(): object | null;

    group(): IEventGroup;

    // remove(types: string[][] | string[] | string, callback: (event: object | IEvent) => void, context?: object, priority?: number): this;

    setParent(parent: object | null): this;
  }

  interface IEventTrigger {
    fire(type: string, eventobject: object | IEvent): this;
  }

  interface IEventWorkflowController extends IEventController {
    onAfterEventFiring?(events: IEventManager, type: string, event?: IEvent): void;

    onBeforeEventFiring?(events: IEventManager, type: string, event?: IEvent): void;
  }

  interface IExpandableControlLayout extends ILayout { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IFreezable extends IEventManager {
    freeze(): IFreezable;

    isFrozen(): boolean;

    unfreeze(): IFreezable;
  }

  interface IGeocodeProvider {
    geocode(request: string, options?: { boundedBy?: number[][], results?: number, skip?: number, strictBounds?: boolean }): Promise<object>;

    suggest(request: string, options?: { boundedBy?: number[][], results?: number, strictBounds?: boolean }): Promise<object>;
  }

  interface IGeometry extends IBaseGeometry, ICustomizable {
    getMap(): Map | null;

    getPixelGeometry(options?: object): IPixelGeometry;

    setMap(map: Map): void;
  }

  interface IGeometryEditor extends ICustomizable, IEventEmitter {
    startEditing(): void;

    stopEditing(): void;
  }

  interface IGeometryJson {
    type: string;
  }

  interface IGeoObject extends IChildOnMap, ICustomizable, IDomEventEmitter, IParentOnMap {
    geometry: IGeometry | null;
    properties: IDataManager;
    state: IDataManager;

    getOverlay(): Promise<IOverlay | null>;

    getOverlaySync(): IOverlay | null;
  }

  interface IGeoObjectCollection extends ICustomizable, IEventEmitter, IParentOnMap {
    add(child: IGeoObject, index?: number): this;

    each(callback: (object: IGeoObject) => void, context: object): void;

    get(index: number): IGeoObject;

    getBounds(): number[][] | null;

    getIterator(): IIterator;

    getLength(): number;

    getPixelBounds(): number[][] | null;

    indexOf(object: IGeoObject): number;

    remove(child: IGeoObject): this;

    removeAll(): this;

    set(index: number, child: IGeoObject): this;

    splice(index: number, length: number): this;
  }

  interface IGeoObjectSequence extends ICustomizable, IEventEmitter, IParentOnMap {
    each(callback: (geoObject: IGeoObject) => void, context?: object): void;

    get(index: number): IGeoObject;

    getBounds(): number[][] | null;

    getIterator(): IIterator;

    getLength(): number;

    getPixelBounds(): number[][] | null;

    indexOf(geoObject: IGeoObject): number;
  }

  interface IHintManager<T> extends IPopupManager<T> { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IIterator {
    getNext(): object | null;
  }

  interface ILayer extends IChildOnMap, ICustomizable, IEventEmitter {
    getBrightness?(): number;

    getCopyrights?(coords: number[], zoom: number): Promise<Array<string | HTMLElement>>;

    getZoomRange?(point: number[]): Promise<number[]>;
  }

  interface ILayout extends IDomEventEmitter {
    // new (data: object);
    destroy(): void;

    getData(): object;

    getParentElement(): HTMLElement;

    getShape(): IShape | null;

    isEmpty(): boolean;

    setData(data: object): void;

    setParentElement(parent: HTMLElement | null): void;
  }

  interface ILineStringGeometry extends IGeometry, ILineStringGeometryAccess {  // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface ILineStringGeometryAccess extends IFreezable {
    get(index: number): number[];

    getChildGeometry(index: number): IPointGeometryAccess;

    getClosest(anchorPosition: number[]): object;

    getCoordinates(): number[][];

    getLength(): number;

    insert(index: number, coordinates: number[][]): ILineStringGeometryAccess;

    remove(index: number): number[];

    set(index: number, coordinates: number[]): ILineStringGeometryAccess;

    setCoordinates(coordinates: number[]): ILineStringGeometryAccess;

    splice(index: number, length: number): number[][];
  }

  interface IMapAction extends IEventEmitter {
    begin(mapActionManager: map.action.Manager): void;

    end(): void;
  }

  interface IMapObjectCollection extends ICollection, ICustomizable, IParentOnMap {  // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IMultiRouteModelJson {
    params: IMultiRouteParams;
    referencePoints: IMultiRouteReferencePoint[];
  }

  interface IMultiRouteParams {
    avoidTrafficJams?: boolean;
    boundedBy?: number[][] | null;
    requestSendInterval?: string | number;
    results?: number;
    reverseGeocoding?: boolean;
    routingMode?: 'auto' | 'masstransit' | 'pedestrian';
    searchCoordOrder?: string;
    strictBounds?: boolean;
    viaIndexes?: number[];
  }

  type IMultiRouteReferencePoint = string | number[] | geometry.Point;

  interface IOptionManager extends IChild<IOptionManager>, IEventEmitter, IFreezable {
    get(key: string, defaultValue: object): object;

    getAll(): object;

    getName(): string;

    getNative(key: string): object;

    resolve(key: string, name?: string): object;

    setName(name: string): void;
  }

  interface IOverlay extends ICustomizable, IDomEventEmitter {
    getData(): object;

    getGeometry(): IPixelGeometry;

    getMap(): Map | null;

    getShape(): IShape | null;

    isEmpty(): boolean;

    setData(data: object): void;

    setGeometry(geometry: IPixelGeometry): void;

    setMap(map: Map | null): void;
  }

  interface IPane extends IEventEmitter {
    destroy(): void;

    getElement(): HTMLElement;

    getMap(): Map;

    getOverflow(): 'visible' | 'hidden';

    getZIndex(): number;
  }

  interface IPanorama {
    getAngularBBox(): number[];

    getConnectionArrows(): IPanoramaConnectionArrow[];

    getConnectionMarkers(): IPanoramaConnectionMarker[];

    getCoordSystem(): ICoordSystem;

    getDefaultDirection(): number[];

    getDefaultSpan(): number[];

    getGraph(): IPanoramaGraph | null;

    getMarkers(): IPanoramaMarker[];

    getName(): string;

    getPosition(): number[];

    getTileLevels(): IPanoramaTileLevel[];

    getTileSize(): number[];
  }

  interface IPanoramaConnection {
    getConnectedPanorama(): Promise<IPanorama>;
  }

  interface IPanoramaConnectionArrow extends IPanoramaConnection {
    properties: data.Manager;

    getDirection(): number[];

    getPanorama(): IPanorama;
  }

  interface IPanoramaConnectionMarker extends IPanoramaConnection, IPanoramaMarker {  // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IPanoramaGraph {
    getEdges(): IPanoramaGraphEdge[];

    getNodes(): IPanoramaGraphEdge[];

    getPanorama(): IPanorama;
  }

  interface IPanoramaGraphEdge {
    getEndNodes(): IPanoramaGraphNode[];
  }

  interface IPanoramaGraphNode {
    getConnectedPanorama(): Promise<IPanorama>;
  }

  interface IPanoramaMarker {
    properties: data.Manager;

    getIconSet(): Promise<IPanoramaMarkerIconSet>;

    getPanorama(): IPanorama;

    getPosition(): number[];
  }

  interface IPanoramaMarkerIcon {
    image: HTMLCanvasElement | HTMLImageElement;
    offset: number[];
  }

  interface IPanoramaMarkerIconSet {
    default: IPanoramaMarkerIcon | null;
    expanded: IPanoramaMarkerIcon | null;
    expandedHovered: IPanoramaMarkerIcon | null;
    hovered: IPanoramaMarkerIcon | null;
  }

  interface IPanoramaTileLevel {
    getImageSize(): number[];

    getTileUrl(x: number, y: number): string;
  }

  interface IParentOnMap {
    getMap(): Map;
  }

  interface IPixelCircleGeometry extends IPixelGeometry {
    getCoordinates(): number[];

    getRadius(): number;
  }

  interface IPixelLineStringGeometry extends IPixelGeometry {
    getClosest(anchorPosition: number[]): object;

    getCoordinates(): number[][];

    getLength(): number;
  }

  interface IPixelGeometry extends IBaseGeometry {
    equals(geometry: IPixelGeometry): boolean;

    getMetaData(): object;

    scale(factor: number): IPixelGeometry;

    shift(offset: number[]): IPixelGeometry;
  }

  interface IPointGeometry extends IGeometry, IPointGeometryAccess { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IPointGeometryAccess {
    getCoordinates(): number[] | null;

    setCoordinates(coordinates: number[] | null): this;
  }

  interface IPopup<T> extends ICustomizable, IEventEmitter {
    close(force?: boolean): Promise<T>;

    getData(): object;

    getOverlay(): Promise<IOverlay>;

    getOverlaySync(): IOverlay;

    getPosition(): number[];

    isOpen(): boolean;

    open(position: number[], data: object | string | HTMLElement): Promise<T>;

    setData(data: object | string | HTMLElement): Promise<T>;

    setPosition(position: number[]): Promise<T>;
  }

  interface IPopupManager<T> extends IEventEmitter {
    close(force?: boolean): Promise<T>;

    destroy(): void;

    getData(): object | null;

    getOptions(): IOptionManager | null;

    getOverlay(): Promise<IOverlay | null>;

    getOverlaySync(): IOverlay | null;

    getPosition(): number[] | null;

    isOpen(): boolean;

    open(position?: number[], data?: object | string | HTMLElement, options?: object): Promise<T>;

    setData(data: object | string | HTMLElement): Promise<T>;

    setOptions(options: object): Promise<T>;

    setPosition(position: number[]): Promise<T>;
  }

  interface IPositioningContext {
    fromClientPixels(clientPixelPoint: number[]): number[];

    getZoom(): number;

    toClientPixels(globalPixelPoint: number[]): number[];
  }

  interface IProjection {
    fromGlobalPixels(globalPixelPoint: number[], zoom: number): number[];

    getCoordSystem(): ICoordSystem;

    isCycled(): boolean[];

    toGlobalPixels(coordPoint: number[], zoom: number): number[];
  }

  interface IRoutePanel {
    options: IOptionManager;
    state: IDataManager;

    getRoute(): multiRouter.MultiRoute;

    switchPoints(): void;
  }

  interface ISearchControlLayout extends IExpandableControlLayout { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface ISelectableControl extends IControl {
    deselect(): void;

    disable(): void;

    enable(): void;

    isEnabled(): boolean;

    isSelected(): boolean;

    select(): void;
  }

  interface ISelectableControlLayout extends ILayout { // tslint:disable-line no-empty-interface no-empty-interfaces
  }

  interface IShape {
    contains(position: number[]): boolean;

    equals(shape: IShape): boolean;

    getBounds(): number[][] | null;

    getGeometry(): IPixelGeometry;

    getType(): string;

    scale(factor: number): IShape;

    shift(offset: number[]): IShape;
  }

  class Monitor {
    constructor(dataManager: IDataManager | IOptionManager);

    public add(name: string[] | string, changeCallback: (event: (object | IEvent)) => void, context?: any, params?: any): Monitor;

    public forceChange(): Monitor;

    public get(name: string): any;

    public remove(name: string): Monitor;

    public removeAll(): Monitor;
  }
}
