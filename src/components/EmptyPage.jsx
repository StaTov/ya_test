const EmptyPage = () => {
    
    function getToken() {
        window.YaSendSuggestToken("http://localhost:3000/", {
            "kek": true
        });
    };

    getToken();
    return null
}

export default EmptyPage;