package sample.panes;

import javafx.scene.layout.FlowPane;
import sample.model.BikePart;

import java.util.List;

/**
 * Created by javier on 11/5/16.
 */
public class BikePartsPane
{
    List<BikePart> parts;

    public BikePartsPane(List<BikePart> newParts)
    {
        parts = newParts;
    }

    public FlowPane getFlowPane(int imageWidth, int imageHeight) throws Exception
    {
        FlowPane pane = new FlowPane();

        for(BikePart part: parts)
        {
            pane.getChildren().add(part.getVBox(imageWidth, imageHeight));
        }
        return pane;
    }
}
