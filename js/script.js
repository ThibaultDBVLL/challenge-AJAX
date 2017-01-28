$(document).ready(function(){
                console.log("coucou");
                var x;
                var id;
                var nom;
                var tabnum = [];

                $.ajax({
                                type: "GET",
                                url: "xml.xml",
                                dataType: "xml",
                                success: xmlFunction,
                        });
        });

function xmlFunction(xml) {
        $("select").change(function(){
                        var foo = $.parseXML(xml);
                        //nom = $(xml).find("clients").find("client").find('nom').html();
                        //console.log($(nom));
                        console.log('coucou2');
                });

        $(xml).find('clients').each(function() {
                        x = $(this).attr('id');
                        tabnum.push(x);
                        nom = $(this).find('nom').text();
                        console.log(x);
                        $(".choix").append($('<option>', { value: x, text: nom }));
                        console.log('func');
                });
}

//
// getelementbytagname
//
// firstchild.nodevalue
//
