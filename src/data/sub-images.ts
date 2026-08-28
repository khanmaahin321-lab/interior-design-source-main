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
  // Marble subcategory products
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
  // Granite subcategory products
  "Rajasthan Granite": granite,
  "Absolute Black Granite": granite,
  "Granite Slabs": granite,
  "Granite Tiles": granite,
  // Green Marble subcategory products - using marble as fallback
  "Rajnagar Green Marble": marble,
  "Forest Green Marble": marble,
  "Green Marble Slabs": marble,
  "Green Marble Tiles": marble,
  // Grey Marble subcategory products - using marble as fallback
  "Grey Veined Marble": marble,
  "Charcoal Grey Marble": marble,
  "Grey Marble Slabs": marble,
  "Grey Marble Tiles": marble,
  // Radha Krishna Statue products
  "Radha Krishna Marble Statue": marble,
  "Painted Radha Krishna Murti": marble,
  "Standing Radha Krishna Statue": marble,
  "Temple Radha Krishna Statue": marble,
  // Sita Rama Statue products
  "Sita Rama Marble Statue": marble,
  "Ram Darbar Marble Murti": marble,
  "Temple Sita Rama Statue": marble,
  // Goddess Lakshmi Statue products
  "Lakshmi Marble Statue": marble,
  "Lotus Lakshmi Murti": marble,
  "Gold Painted Lakshmi Statue": marble,
  // Maa Kali Statue products
  "Maa Kali Marble Statue": marble,
  "Black Marble Kali Murti": marble,
  "Temple Kali Statue": marble,
  // Sai Baba Statue products
  "Sai Baba Marble Statue": marble,
  "Sitting Sai Baba Murti": marble,
  "Painted Sai Baba Statue": marble,
  // Marble Mandir products
  "Carved Marble Mandir": marble,
  "Dome Marble Temple": marble,
  "Home Marble Mandir": marble,
  "Designer Marble Temple": marble,
  // Marble Fireplace products
  "Carved Marble Fireplace": marble,
  "Classic Marble Mantel": marble,
  "Designer Marble Fireplace": marble,
};
