const galleryContainer = document.querySelector(".picture");
const galleryitems = galleryContainer.querySelectorAll(".picture-item");
const indicator = document.querySelector(".indicator");

const defaultItemFlex = "0 1 20px";
const hoverItemFlex = "1 1 400px";

const updateGalleryItems = () => {
    galleryitems.forEach((item) => {
        let flex = defaultItemFlex;

        if(item.isHovered) {
            flex = hoverItemFlex;
        }

        item.style.flex = flex;
    });
};

galleryitems[0].isHovered = true;
updateGalleryItems();

galleryitems.forEach((item) => {
    item.addEventListener("mouseenter", ( ) => {
        galleryitems.forEach((otherItem) => {
            otherItem.isHovered = otherItem === item;
        });

        updateGalleryItems()
    });
});

galleryContainer.addEventListener("mousemove", (e) =>{
    indicator.style.left = ${
        e.clietx - galleryContainer.getBoundingClientRect().left()
    }px ;
});