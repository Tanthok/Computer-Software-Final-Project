package sample.model;

import java.util.List;

/**
 * Created by javier on 11/4/16.
 */
public class Cart
{
    List<CartItem> items;
    public Cart(List<CartItem> newItems)
    {
        items = newItems;
    }

    public Double getTotal()
    {
        Double total = 0.0;
        for(CartItem item: items)
        {
            total = total + item.getPrice();
        }
        return total;
    }

    public void removeItem(CartItem item)
    {
        items.remove(item);
    }

    public void removeItem(int index)
    {
        items.remove(index);
    }

    public void changeItemQuantity(int index, int newQuantity)
    {
        items.get(index).setQuantity(newQuantity);
    }

    public void addItem(CartItem newItem)
    {
        for(CartItem item: items)
        {
            if(item.equals(newItem))
            {
                item.setQuantity(item.getQuantity() + newItem.getQuantity());
                return;
            }
        }
        items.add(newItem);
    }

}
