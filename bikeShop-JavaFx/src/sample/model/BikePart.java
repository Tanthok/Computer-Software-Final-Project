package sample.model;

import javafx.embed.swing.SwingFXUtils;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.VBox;
import javafx.scene.text.Text;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;

/**
 * Created by javier on 11/4/16.
 */
public class BikePart implements Item
{
    Double price;
    String name;
    String description;
    String pathToPicture;
    Integer id;

    public BikePart(String newName, Integer newId, Double newPrice, String newDescription, String newPathToPicture)
    {
        name = newName;
        price = newPrice;
        description = newDescription;
        pathToPicture = newPathToPicture;
        id = newId;
    }

    @Override
    public Integer getId()
    {
        return id;
    }
    @Override
    public Double getPrice() {
        return price;
    }

    @Override
    public String getName() {
        return name;
    }

    @Override
    public String getDescription() {
        return description;
    }

    @Override
    public ImageView getImageView(int width, int height) throws Exception
    {
        BufferedImage bufferedImage = ImageIO.read(getClass().getResource(pathToPicture));
        Image image = SwingFXUtils.toFXImage(bufferedImage, null);
        ImageView imageView = new ImageView();
        imageView.setFitHeight(height);
        imageView.setFitWidth(width);
        imageView.setImage(image);
        return imageView;
    }

    public VBox getVBox(int width, int height) throws Exception
    {
        VBox box = new VBox();
        Text textPrice = new Text(price.toString());
        Text textName = new Text(name);
        box.getChildren().add(getImageView(width, height));
        box.getChildren().add(textName);
        box.getChildren().add(textPrice);
        return box;
    }
}
