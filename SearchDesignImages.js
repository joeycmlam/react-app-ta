import imageFile from "./imageFiles.json";


export default function SearchDesignImages(searchText, maxResults) {
    return imageFile
        .filter(aImage => {
            if (aImage.filename.toLowerCase().includes(searchText.toLowerCase())) {
                return true;
            }
            if (aImage.pattern.includes(searchText)) {
                return true;
            }

            return false;
        })
        .slice(0, maxResults);
}
