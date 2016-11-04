package sample.model;

import javafx.scene.image.ImageView;

/**
 * Created by javier on 11/4/16.
 */
public interface Item
{
    public Double getPrice();
    public String getName();
    public String getDescription();
    public ImageView getImageView(int width, int height) throws Exception;

    public Integer getId();

}
