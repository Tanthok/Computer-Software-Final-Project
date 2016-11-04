package sample;

import javafx.application.Application;
import javafx.embed.swing.SwingFXUtils;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Group;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.HBox;
import javafx.scene.layout.Pane;
import javafx.scene.layout.StackPane;
import javafx.scene.text.Text;
import javafx.stage.Stage;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception{



        Group group = new Group();
        BufferedImage buffImage = ImageIO.read(getClass().getResourceAsStream("images/crank.jpg"));
        Image crank2 = SwingFXUtils.toFXImage(buffImage, null);
        Image crank = new Image("file:images/crank.jpg", true);
        Image fork = new Image("file:images/fork.png", true);

        ImageView img1 = new ImageView();
        img1.setImage(crank2);

        group.getChildren().add(img1);

        primaryStage.setTitle("hey hey");
        primaryStage.setScene(new Scene(group));
        primaryStage.show();



    }


    public static void main(String[] args) {
        launch(args);
    }
}
