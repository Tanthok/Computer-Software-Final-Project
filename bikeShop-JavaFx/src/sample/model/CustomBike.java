package sample.model;

import javafx.scene.image.ImageView;

import java.util.Random;

/**
 * Created by javier on 11/4/16.
 */
public class CustomBike implements Item
{
    String frameColor;
    String frameDecalColor;
    String handlebarColor;
    String seatColor;
    BikePart freewheel;
    BikePart frontWheel;
    BikePart rearWheel;
    Integer id;

    public CustomBike()
    {
        frameColor = "000000";
        frameDecalColor = "000000";
        handlebarColor = "000000";
        seatColor = "000000";
        Random rando = new Random();
        id = rando.nextInt(1000) + 1000;
        //TODO set the default freewheel, frontwheel, and rearwheel bikeparts

    }

    @Override
    public Integer getId()
    {
        return id;
    }
    @Override
    public Double getPrice()
    {
        Double basePrice = 150.00;
        if(frameColor != "000000")
        {
            basePrice = basePrice + 20.00;
        }

        if(frameDecalColor != "000000")
        {
            basePrice = basePrice + 5.00;
        }

        if(handlebarColor != "000000")
        {
            basePrice = basePrice + 10.00;
        }

        if(seatColor != "000000")
        {
            basePrice = basePrice + 10.00;
        }

        basePrice = freewheel.getPrice() + frontWheel.getPrice() + rearWheel.getPrice() + basePrice;

        return basePrice;
    }

    @Override
    public String getName() {
        return "Custom Bike";
    }

    @Override
    public String getDescription() {
        return "A bike designed by you!";
    }

    @Override
    public ImageView getImageView(int width, int height) throws Exception {
        //TODO open svg, and manipulate the colors using the user desired colors, turn into jpeg and return imageview
        return null;
    }
}
