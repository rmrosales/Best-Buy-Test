export class rmrProduct {
    
    constructor(
        public rmrId: number,
        public rmrProductName: string,
        public rmrDescription: string,
        public rmrPrice: number,
        public rmrPhoto: string,
        public rmrCategory: string
    ) { }
}

export class rmrCategories {
    
    constructor(
        public rmrCategoryType: string,
        public rmrCategoryPhoto: string
    ) { }
}
