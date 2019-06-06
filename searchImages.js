// import imageList from "./imageList.json";
import imageList from "./imageFiles.json";


export default function searchImages(searchText, maxResults) {
    return imageList
        .filter(aImage => {
            if (aImage.pattern.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            return false;
        })
        .slice(0, maxResults);
}
