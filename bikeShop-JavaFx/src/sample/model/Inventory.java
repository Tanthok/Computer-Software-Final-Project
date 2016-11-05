package sample.model;

import java.util.HashMap;
import java.util.List;

/**
 * Created by javier on 11/5/16.
 */
public class Inventory
{
    HashMap<String, List<BikePart>> itemsByType;

    public Inventory(HashMap<String, List<BikePart>> newItemsByType)
    {
        itemsByType = newItemsByType;
    }

    public List<BikePart> getItemsFromType(String type)
    {
        return itemsByType.get(type);
    }
}
