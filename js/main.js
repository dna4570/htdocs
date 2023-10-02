$(function () {
    $('gallery'.search(function(){
        var $container = $(this),
        $lordMoreButton = $('#lord-more'),
        $filter = $('#gallery-filter'),
        addItemCount = 16,
        add = 0,
        allData = [],
        filteredData = [];

        $container.masonry({
            conlumWidth: 230,
            gutter: 10,
            itemSelector: '.gallery-item'

        });
        $.getJSON('./data/content.json',initGallery);
        function initGallery (data) {
            allData = data;
            filterData = allData;
            addItems();
            $lordMoreButton.on('click',addItems);
            $filter.on('change','input[type="radio"]',filterItems);
        }
        function addItems (filter) {

        }
        function filterItems () {

        }
    }));

});

function addItems (filter){
    var elements = [],
    slicedData = filteredData.slice(added,add + addItemCount);

    $.each(sliceData,function(i,item){
        var itemHTML =
        '< class="gallery is-lording">'
    })
}
