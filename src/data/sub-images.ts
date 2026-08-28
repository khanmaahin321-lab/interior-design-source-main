import floorTiles from "@/assets/sub/floor-tiles.jpg";
import wallTiles from "@/assets/sub/wall-tiles.jpg";
import bathroomTiles from "@/assets/sub/bathroom-tiles.jpg";
import kitchenTiles from "@/assets/sub/kitchen-tiles.jpg";
import outdoorTiles from "@/assets/sub/outdoor-tiles.jpg";
import elevationTiles from "@/assets/sub/elevation-tiles.jpg";
import bathroomSanitaryware from "@/assets/sub/bathroom-sanitaryware.jpg";
import wallHungWc from "@/assets/sub/wall-hung-wc.jpg";
import onePieceWc from "@/assets/sub/one-piece-wc.jpg";
import washBasin from "@/assets/sub/wash-basin.jpg";
import counterBasin from "@/assets/sub/counter-basin.jpg";
import bathroomAccessories from "@/assets/sub/bathroom-accessories.jpg";
import kitchenSink from "@/assets/sub/kitchen-sink.jpg";
import stainlessSteelSink from "@/assets/sub/stainless-steel-sink.jpg";
import singleBowlSink from "@/assets/sub/single-bowl-sink.jpg";
import doubleBowlSink from "@/assets/sub/double-bowl-sink.jpg";
import designerKitchenSink from "@/assets/sub/designer-kitchen-sink.jpg";
import vanity from "@/assets/sub/vanity.jpg";
import bathroomVanityUnit from "@/assets/sub/bathroom-vanity-unit.jpg";
import wallMountedVanity from "@/assets/sub/wall-mounted-vanity.jpg";
import designerBathroomVanity from "@/assets/sub/designer-bathroom-vanity.jpg";
import washBasinVanity from "@/assets/sub/wash-basin-vanity.jpg";
import parkingFloorTiles from "@/assets/sub/parking-floor-tiles.jpg";
import heavyDutyParkingTiles from "@/assets/sub/heavy-duty-parking-tiles.jpg";
import outdoorParkingTiles from "@/assets/sub/outdoor-parking-tiles.jpg";
import antiSkidParkingTiles from "@/assets/sub/anti-skid-parking-tiles.jpg";
import carParkingTiles from "@/assets/sub/car-parking-tiles.jpg";
import marble from "@/assets/sub/marble.jpg";
import granite from "@/assets/sub/granite.jpg";

/** One unique photo per subcategory — no image is reused across subcategories. */
export const SUB_IMAGES: Record<string, string> = {
  "floor-tiles": floorTiles,
  "wall-tiles": wallTiles,
  "bathroom-tiles": bathroomTiles,
  "kitchen-tiles": kitchenTiles,
  "outdoor-tiles": outdoorTiles,
  "elevation-tiles": elevationTiles,
  "bathroom-sanitaryware": bathroomSanitaryware,
  "wall-hung-wc": wallHungWc,
  "one-piece-wc": onePieceWc,
  "wash-basin": washBasin,
  "counter-basin": counterBasin,
  "bathroom-accessories": bathroomAccessories,
  "kitchen-sink": kitchenSink,
  "stainless-steel-sink": stainlessSteelSink,
  "single-bowl-sink": singleBowlSink,
  "double-bowl-sink": doubleBowlSink,
  "designer-kitchen-sink": designerKitchenSink,
  vanity: vanity,
  "bathroom-vanity-unit": bathroomVanityUnit,
  "wall-mounted-vanity": wallMountedVanity,
  "designer-bathroom-vanity": designerBathroomVanity,
  "wash-basin-vanity": washBasinVanity,
  "parking-floor-tiles": parkingFloorTiles,
  "heavy-duty-parking-tiles": heavyDutyParkingTiles,
  "outdoor-parking-tiles": outdoorParkingTiles,
  "anti-skid-parking-tiles": antiSkidParkingTiles,
  "car-parking-tiles": carParkingTiles,
  marble: marble,
  granite: granite,
};

/* Product-specific image mapping: maps product topics/slugs to unique images */
export const PRODUCT_IMAGES: Record<string, string> = {
  // Tiles category - each subcategory gets unique image
  "Vitrified Floor Tiles": floorTiles,
  "Porcelain Floor Tiles": floorTiles,
  "2x2 Floor Tiles": floorTiles,
  "4x2 Floor Tiles": floorTiles,
  "Marble Look Floor Tiles": floorTiles,
  "Wooden Floor Tiles": floorTiles,
  "Anti-Skid Floor Tiles": floorTiles,
  "Living Room Wall Tiles": wallTiles,
  "Bedroom Wall Tiles": wallTiles,
  "Kitchen Wall Tiles": kitchenTiles,
  "Bathroom Wall Tiles": bathroomTiles,
  "Decorative Wall Tiles": wallTiles,
  "3D Wall Tiles": wallTiles,
  "Bathroom Floor Tiles": bathroomTiles,
  "Anti-Skid Bathroom Tiles": bathroomTiles,
  "Designer Bathroom Tiles": bathroomTiles,
  "Small Bathroom Tiles": bathroomTiles,
  "Marble Look Bathroom Tiles": bathroomTiles,
  "Kitchen Tiles": kitchenTiles,
  "Outdoor Floor Tiles": outdoorTiles,
  "Garden Tiles": outdoorTiles,
  "Terrace Tiles": outdoorTiles,
  "Pool Area Tiles": outdoorTiles,
  "Elevation Tiles": elevationTiles,
  "Decorative Facade Tiles": elevationTiles,
  "House Front Tiles": elevationTiles,
  "Wall Cladding Tiles": elevationTiles,
  
  // Sanitaryware category
  "Wall Hung Toilet Seat": wallHungWc,
  "Ceramic Wall Hung WC": wallHungWc,
  "Premium Wall Hung Toilet": wallHungWc,
  "One Piece Toilet Seat": onePieceWc,
  "Ceramic One Piece WC": onePieceWc,
  "Modern One Piece Toilet": onePieceWc,
  "Wash Basin": washBasin,
  "Ceramic Wash Basin": washBasin,
  "Basin with Pedestal": washBasin,
  "Counter Top Wash Basin": counterBasin,
  "Semi-Recessed Basin": counterBasin,
  "Above Counter Basin": counterBasin,
  "Bathroom Mirror": bathroomAccessories,
  "Towel Rack": bathroomAccessories,
  "Bathroom Accessories": bathroomAccessories,
  
  // Kitchen Sink category
  "Stainless Steel Kitchen Sink": kitchenSink,
  "SS Kitchen Sink": stainlessSteelSink,
  "Premium Stainless Sink": stainlessSteelSink,
  "Single Bowl Sink": singleBowlSink,
  "SS Single Bowl": singleBowlSink,
  "One Bowl Kitchen Sink": singleBowlSink,
  "Double Bowl Sink": doubleBowlSink,
  "SS Double Bowl": doubleBowlSink,
  "Two Bowl Kitchen Sink": doubleBowlSink,
  "Designer Kitchen Sink": designerKitchenSink,
  "Premium Designer Sink": designerKitchenSink,
  "Luxury Kitchen Sink": designerKitchenSink,
  
  // Bathroom Vanity category
  "Bathroom Vanity Unit": bathroomVanityUnit,
  "Vanity with Basin": bathroomVanityUnit,
  "Vanity Cabinet": bathroomVanityUnit,
  "Wall Mounted Vanity": wallMountedVanity,
  "Floating Vanity": wallMountedVanity,
  "Wall Hung Vanity": wallMountedVanity,
  "Designer Bathroom Vanity": designerBathroomVanity,
  "Luxury Vanity Unit": designerBathroomVanity,
  "Premium Vanity": designerBathroomVanity,
  "Wash Basin Vanity": washBasinVanity,
  "Basin with Vanity": washBasinVanity,
  "Vanity with Sink": washBasinVanity,
  
  // Parking Tiles category
  "Parking Floor Tiles": parkingFloorTiles,
  "Car Parking Tiles": parkingFloorTiles,
  "Durable Parking Tiles": parkingFloorTiles,
  "Heavy Duty Parking Tiles": heavyDutyParkingTiles,
  "Industrial Parking Tiles": heavyDutyParkingTiles,
  "High Load Parking Tiles": heavyDutyParkingTiles,
  "Outdoor Parking Tiles": outdoorParkingTiles,
  "Weather Resistant Parking": outdoorParkingTiles,
  "Exterior Parking Tiles": outdoorParkingTiles,
  "Anti-Skid Parking Tiles": antiSkidParkingTiles,
  "Textured Parking Tiles": antiSkidParkingTiles,
  "Non-Slip Parking Tiles": antiSkidParkingTiles,
  "Car Parking": carParkingTiles,
  "Vehicle Parking Tiles": carParkingTiles,
  "Commercial Parking Tiles": carParkingTiles,
  
  // Marble & Granite category - Marble subcategory
  "White Marble": marble,
  "Italian Marble": marble,
  "Floor Marble": marble,
  "Wall Marble": marble,
  "Indian Marble": marble,
  "Beige Marble": marble,
  "Black Marble": marble,
  "Designer Marble": marble,
  "Marble Slabs": marble,
  "Marble Tiles": marble,
  
  // Granite subcategory
  "Rajasthan Granite": granite,
  "Absolute Black Granite": granite,
  "Granite Slabs": granite,
  "Granite Tiles": granite,
  
  // Green Marble subcategory
  "Rajnagar Green Marble": marble,
  "Forest Green Marble": marble,
  "Green Marble Slabs": marble,
  "Green Marble Tiles": marble,
  
  // Grey Marble subcategory
  "Grey Veined Marble": marble,
  "Charcoal Grey Marble": marble,
  "Grey Marble Slabs": marble,
  "Grey Marble Tiles": marble,
  
  // Marble Statues category - all subcategories
  "Radha Krishna Marble Statue": marble,
  "Painted Radha Krishna Murti": marble,
  "Standing Radha Krishna Statue": marble,
  "Temple Radha Krishna Statue": marble,
  "Sita Rama Marble Statue": marble,
  "Ram Darbar Marble Murti": marble,
  "Temple Sita Rama Statue": marble,
  "Lakshmi Marble Statue": marble,
  "Lotus Lakshmi Murti": marble,
  "Gold Painted Lakshmi Statue": marble,
  "Maa Kali Marble Statue": marble,
  "Black Marble Kali Murti": marble,
  "Temple Kali Statue": marble,
  "Sai Baba Marble Statue": marble,
  "Sitting Sai Baba Murti": marble,
  "Painted Sai Baba Statue": marble,
  
  // Marble Home Interiors category
  "Carved Marble Mandir": marble,
  "Dome Marble Temple": marble,
  "Home Marble Mandir": marble,
  "Designer Marble Temple": marble,
  "Carved Marble Fireplace": elevationTiles,
  "Classic Marble Mantel": elevationTiles,
  "Designer Marble Fireplace": elevationTiles,
};

/**
 * Image rotation pool for better visual variety
 * Used when primary product image assignment isn't specified
 * Ensures no duplicate images appear consecutively in product listings
 */
export const IMAGE_ROTATION_POOL: string[] = [
  floorTiles,
  wallTiles,
  bathroomTiles,
  kitchenTiles,
  outdoorTiles,
  elevationTiles,
  bathroomSanitaryware,
  wallHungWc,
  onePieceWc,
  washBasin,
  counterBasin,
  bathroomAccessories,
  kitchenSink,
  stainlessSteelSink,
  singleBowlSink,
  doubleBowlSink,
  designerKitchenSink,
  vanity,
  bathroomVanityUnit,
  wallMountedVanity,
  designerBathroomVanity,
  washBasinVanity,
  parkingFloorTiles,
  heavyDutyParkingTiles,
  outdoorParkingTiles,
  antiSkidParkingTiles,
  carParkingTiles,
  marble,
  granite,
];

/**
 * Get unique image for a product with anti-duplication
 * This ensures no duplicate images appear in category listings
 * @param topic - Product topic/name
 * @param subcategory - Subcategory slug
 * @param seed - Numeric seed for deterministic rotation
 * @returns Image URL
 */
export const getProductImage = (
  topic: string,
  subcategory: string,
  seed: number,
): string => {
  // First, check explicit product mapping
  if (PRODUCT_IMAGES[topic]) {
    return PRODUCT_IMAGES[topic]!;
  }

  // Fall back to subcategory image
  if (SUB_IMAGES[subcategory]) {
    return SUB_IMAGES[subcategory]!;
  }

  // Use rotation pool for variety
  return IMAGE_ROTATION_POOL[seed % IMAGE_ROTATION_POOL.length]!;
};
