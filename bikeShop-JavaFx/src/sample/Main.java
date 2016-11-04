package sample;

import javafx.application.Application;
import javafx.embed.swing.SwingFXUtils;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.geometry.Insets;
import javafx.scene.Group;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Hyperlink;
import javafx.scene.image.Image;
import javafx.scene.image.ImageView;
import javafx.scene.layout.*;
import javafx.scene.text.Font;
import javafx.scene.text.FontWeight;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import org.controlsfx.control.GridView;
import org.controlsfx.control.cell.ImageGridCell;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.File;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception
    {

        BorderPane bigPane = new BorderPane();

        String[] pathToImages = {"images/crank.jpg", "images/fork.png", "images/bicycle.jpg", "images/handlebar.jpg", "images/seat.jpg", "images/wheel.jpg"};

        FlowPane flowPane = buildFlowPane(pathToImages, 300, 300);

        bigPane.setLeft(addVBox());
        bigPane.setCenter(flowPane);


        primaryStage.setTitle("hey hey");
        primaryStage.setScene(new Scene(bigPane));
        primaryStage.show();



    }

    public FlowPane buildFlowPane(String[] pathToImages, int width, int height) throws Exception
    {
        FlowPane flowPane = new FlowPane();
        flowPane.setPadding(new Insets(5, 0, 5, 0));
        flowPane.setVgap(4);
        flowPane.setHgap(4);
        flowPane.setPrefWrapLength(1000);
        flowPane.setStyle("-fx-background-color: DAE6F3;");

        for(String pathToImage: pathToImages)
        {
            BufferedImage buffImage = ImageIO.read(getClass().getResourceAsStream(pathToImage));
            Image image = SwingFXUtils.toFXImage(buffImage, null);
            ImageView imageView = new ImageView();
            imageView.setFitHeight(height);
            imageView.setFitWidth(width);
            imageView.setImage(image);
            flowPane.getChildren().add(imageView);

        }

        return flowPane;
    }

    private VBox addVBox() throws Exception {

        VBox vbox = new VBox();
        vbox.setPadding(new Insets(10)); // Set all sides to 10
        vbox.setSpacing(8);              // Gap between nodes

        //Text title = new Text("Data");
        //vbox.getChildren().add(title);

        Hyperlink options[] = new Hyperlink[] {
                new Hyperlink("Cart"),
                new Hyperlink("User"),
                new Hyperlink("Login")};

        for (int i=0; i<3; i++) {
            // Add offset to left side to indent from title
            VBox.setMargin(options[i], new Insets(0, 0, 0, 8));
            vbox.getChildren().add(options[i]);
        }

        return vbox;
    }


    public static void main(String[] args) {
        launch(args);
    }
}
