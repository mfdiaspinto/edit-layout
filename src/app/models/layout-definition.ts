export class LayoutDefinition {
    title: string;
    rows: RowDefinition[];

    constructor() {
        this.rows = [];
    }
}

export class RowDefinition {
    columns: ColumnDefinition[];

    constructor(columns: ColumnDefinition[]) {
        this.columns = columns;
    }
}

export class ColumnDefinition {
    fields: FieldDefinition [];
    
    size: string;
    constructor(fields: FieldDefinition[], classSize: string ) {
        this.fields = fields;
        this.size = classSize;
    }
}

export class FieldDefinition {
    name: string;
    caption: string;
    size: string;
    component: any;

    constructor(name: string, caption: string, sizeClass: string, component: any) {
        this.name = name;
        this.caption = caption;
        this.size = sizeClass;
        this.component = component;
    }
}