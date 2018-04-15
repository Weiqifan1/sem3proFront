/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package security;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Scanner;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 *
 * @author Ejer
 */
@Path("remote")

public class RemoteServerEndpoint {
    
    /*
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getallPerson() {

        ArrayList<JSONMessage> messages = new ArrayList<>();
        PersonFacade.getpersons(em);
        for (Person p : PersonFacade.persons.values()) {

            messages.add(new PersonMessage(p));
        }

        return gson.toJson(messages);

    }
    */
    //nedenstående kunne være blevet gjort med et array af endpoints og en enkelt metode men ...
    
    
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getData() throws IOException {
        String output = getSwappiData("https://swapi.co/api");
        return output;
    }
     
   @GET
    @Path("/people")
    @Produces(MediaType.APPLICATION_JSON)
    public String getPeople() throws IOException {
        String output = getSwappiData("https://swapi.co/api/people");
        return output;
    }

      @GET
         @Path("/vehicles")
    @Produces(MediaType.APPLICATION_JSON)
    public String getVehicles() throws IOException {
        String output = getSwappiData("https://swapi.co/api/vehicles");
        return output;
    }
     @GET
         @Path("/starships")
    @Produces(MediaType.APPLICATION_JSON)
    public String getSpaceships() throws IOException {
        String output = getSwappiData("https://swapi.co/api/starships");
        return output;
    }
   
      @GET
         @Path("/planets")
    @Produces(MediaType.APPLICATION_JSON)
    public String getPLanets() throws IOException {
        String output = getSwappiData("https://swapi.co/api/planets");
        return output;
    }
      @GET
         @Path("/species")
    @Produces(MediaType.APPLICATION_JSON)
    public String getSpecies() throws IOException {
        String output = getSwappiData("https://swapi.co/api/species");
        return output;
    }
    
     @GET
         @Path("/films")
    @Produces(MediaType.APPLICATION_JSON)
    public String getFilms() throws IOException {
        String output = getSwappiData("https://swapi.co/api/films");
        return output;
    }
    
    
    public static String getSwappiData(String urlInput) throws MalformedURLException, IOException{
    URL url = new URL(urlInput);//new URL("https://swapi.co/api/people/"+id);
    HttpURLConnection con = (HttpURLConnection) url.openConnection();
    con.setRequestMethod("GET");
    con.setRequestProperty("Accept", "application/json;charset=UTF-8");
    con.setRequestProperty("User-Agent", "server");
    Scanner scan = new Scanner(con.getInputStream());
    String jsonStr = null;
    if (scan.hasNext()) {
      jsonStr = scan.nextLine();
    }
    scan.close();
    return jsonStr;
  }


    //original url:
    //"http://restcountries.eu/rest/v1/alpha..."
    //CA3 url:
    //"https://swapi.co/api"
    //fetch(URL + "/people/?page=2")
    public static String getValueFromServer(String inputUrl) {

        String jsonOutput = "virker ikke";
        
        try {

            URL url = new URL(inputUrl);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();

            con.setRequestMethod(
                    "GET");
            con.setRequestProperty(
                    "Accept", "application/json;charset=UTF-8");
            Scanner scan = new Scanner(con.getContentType());
            String jsonStr = null;

            if (scan.hasNext()) {
                jsonStr = scan.nextLine();
            }

            scan.close();

            System.out.println(jsonStr);
            jsonOutput = jsonStr;
        } catch (Exception e) {
                jsonOutput = "catch error: " + e;
        }
        return jsonOutput;
    }
    
    public static void main(String[] args) throws IOException {
        System.out.println("swapi test");
       // System.out.println(getValueFromServer("http://restcountries.eu/rest/v1/alpha"));
        System.out.println(getValueFromServer("https://swapi.co/api/people/?page=2"));
        //System.out.println(getSwappiData(1));
    }
}
