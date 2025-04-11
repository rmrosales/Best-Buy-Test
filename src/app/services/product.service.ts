import { Injectable } from "@angular/core";
import { rmrProduct } from "../models/product.model";
import { rmrCategories } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class rmrProductService {
    private rmrProducts: rmrProduct[] = [
        new rmrProduct(1,
            'Bosch 30" 3.7 Cu. Ft. True Convection 5-Burner Stove',
            'Experience the best of both worlds with the Bosch 800 Series gas range. This industrial-style range features a spacious 5-burner gas cooktop so you can whip up gourmet meals with precision. I\'s also equipped with a 3.7 cu. ft. true convection oven that keeps air flowing around your dishes so everything is cooked evenly and efficiently.',
            3000,
            'stove.jpeg',
            'Appliances'),
        new rmrProduct(2,'Bosch 36" 21 Cu. Ft. Counter-Depth 4-Door French Door Refrigerator',
            'Keep your food fresh and close at hand with this 4-door Bosch refrigerator. The fridge\'s 21 cu ft. capacity provides plenty of room for all your groceries, while the FarmFresh system keeps the contents perfectly chilled. Its HomeConnect system connects to your home network for integration with Nest, Alexa, Fitbit, and more.',
            1500,
            'fridge.jpeg',
            'Appliances'),
        new rmrProduct(3,'Apple MacBook Air 13.3" w/ Touch ID',
            'Apple\’s thinnest and lightest notebook gets supercharged with the Apple M1 chip. Tackle your projects with the blazing-fast 8-core CPU. Take graphics-intensive apps and games to the next level with a 7-core GPU. Accelerate machine-learning tasks with the 16-core Neural Engine. All with a silent, fanless design and the longest battery life ever -- up to 18 hours.',
            1299,
            'macbook.jpeg',
            'Computers'),
        new rmrProduct(4,'Lenovo IdeaPad Flex 5 13.3" Touchscreen 2-in-1 Chromebook',
            'Step into the modern age of ultra-fast computing with the Lenovo IdeaPad Flex 5 2-in-1 Chromebook. It runs on an Intel Celeron CPU paired with 4GB of RAM that can handle everything you throw at it. Its connectivity options include USB Type-C ports for superfast data transfers and integrated Wi-Fi 6 and Bluetooth 5.0 for with excellent range.',
            499,
            'tablet.jpeg',
            'Computers'),
        new rmrProduct(5,'LG 50" 4K UHD HDR LED webOS Smart TV',
            'The LG 55" smart TV offers a game-changing entertainment experience in the comfort of your home. With 4K UHD resolution and active HDR support, you can enjoy gaming, movies, and shows in vivid colours and sharp details. It is also equipped with webOS that provides access to your favourite streaming apps, and features a simple interface for easy browsing and smart control options.',
            699,
            'lgtv.jpeg',
            'TVs'),
        new rmrProduct(6,'Amazon Fire TV Stick 4K Max Media Streamer with Alexa Voice Remote',
            'Dive into 4K Ultra HD cinematic entertainment with the Amazon Fire TV Stick 4K Max Media Streamer. Equipped with a quad-core 1.8 GHz processor, Wi-Fi 6 support, and Alexa Voice Remote, this powerful streaming stick delivers faster app starts and more fluid navigation. Enjoy vivid, lifelike colours with support for Dolby Vision, HDR 10, HDR10+, and the immersive audio of Dolby Atmos.',
            59.99,
            'firestick.jpeg',
            'TVs')
      ];
    
      getrmrProducts(): rmrProduct[] {
        return this.rmrProducts;
      }
    
      getrmrProductById(id: number): rmrProduct {
        const product = this.rmrProducts.find(rmrProduct => rmrProduct.rmrId === id);
        if (!product) {
            throw new Error(`Product with ID ${id} not found.`);
        }
        return product;
      }
    
      getrmrProductsByCategory(category: string): rmrProduct[] {
        return this.rmrProducts.filter(rmrProduct => rmrProduct.rmrCategory === category);
      }

    //Category List
        private rmrProductCategories: rmrCategories[] = [
            new rmrCategories('Computers',
                'laptops.png'
            ),
            new rmrCategories('TVs',
                'tvs.png'
            ),
            new rmrCategories('Appliances',
                'appliances.png'
            )]

            getrmrCategories(): rmrCategories[] {
                return this.rmrProductCategories;
            }
    }