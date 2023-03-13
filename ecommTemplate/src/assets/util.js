import { SERVER_ADDRESS } from "../api/serverConstants";
export function calculate_product_cost(base, daily, days) {
    const floatBase = parseFloat(base);
    const floatDaily = parseFloat(daily);
    const floatDays = parseFloat(days);
  
    if (isNaN(floatBase) || isNaN(floatDaily) || isNaN(floatDays)) {
      throw new Error('Invalid input: base, daily, and days must be numbers');
    }
  
    const cost = floatBase + (floatDaily * floatDays);
    const costStr = (Math.round(cost * 100) / 100).toFixed(2);
    return costStr
  }


export function create_full_image_path(img_path) {
    return `${SERVER_ADDRESS}${img_path}`;
  }

export function getImagesFromFolder(folderPath) {
    const folder = create_full_folder_path(folderPath)
  }
  