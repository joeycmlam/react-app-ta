import imageList from "./imageFiles.json";
import conceptList from "./imageConcepts.json";


export default function filterConcepts(data, searchText) {
    var filterdata = data
        .filter(item => {
            if (searchText.length > 0) {
                if (item.concepts != null) {
                    return isConceptMatch(searchText, item);
                }
                return false;
            } else {
                return true;
            }

        });
    return filterdata;
}

export function searchImages(searchText, maxResults) {
    return imageList
        .filter(aImage => {
                if (aImage.pattern.toLowerCase().includes(searchText.toLowerCase())) {
                    return true;
                }
                return false;
            }
        )
        .slice(0, maxResults);
}


function isConceptMatch(searchText, aConcept) {

    var result = (aConcept.concepts.filter(aItem => {
        if (aItem.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
        }
        return false;
    }));

    if (result.length > 0) {
        return true;
    } else {
        return false;
    }


}


export function searchConceptImages(searchText, maxResults) {


    return conceptList
        .filter(item => {
            if (item.concepts != null) {
                return isConceptMatch(searchText, item);
            }
            return false;
        })
        ;

}


