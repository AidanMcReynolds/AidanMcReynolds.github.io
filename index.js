$(() => {
    $(".tab").on("click", (event)=>{
            deselectAll();
            hideAll();
            selectTab(event.target);
            showSection(event.target);
    });
});
function deselectAll() {
    $(".tab").removeClass("selected");
}
function hideAll() {
    $(".section").hide();
}
function selectTab(elem) {
    $(elem).addClass("selected");
}
function showSection(elem) {
    console.log("#"+elem.id+"section")
    $("#"+elem.id+"section").show();
}