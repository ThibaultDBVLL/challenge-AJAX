$.ajax( {
            type: "GET",
            url: "xml.xml",
            dataType: "xml",
            success: function(xml)
                  {
                  $(xml).find('xml').each(
                        function()
                              {
                              var id = $(this).attr(Div_XML);
                               var title = $(this).find(clients).text();
                               var url = $(this).find(xml.xml).text();
                               $('<div class="items" id="link_' + id + '"></div>').html('<a href="' + url + '">' + title + '</a>').appendTo('#Div_XML');
                        }
            }


        }
      );
