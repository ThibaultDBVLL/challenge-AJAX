$(document).ready(
    function()
    {
        $.ajax( {
            type: "GET",
            url: "data.xml",
            dataType: "xml",
            success: function(xml)
            {
                $(xml).find('client').each( function()
                {
                    var id = $(this).attr('id');
                    var nom = $(this).find('nom').text();

                    console.log(id);
                    $('.choix').append($('<option>',{ value: id, text: nom}));

                } );

            }
            $('.choix').change($('<option>',{ value: id, text: nom }));
        }
        );
    }
    );
