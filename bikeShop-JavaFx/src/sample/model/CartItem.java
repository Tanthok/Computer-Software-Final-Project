package sample.model;

/**
 * Created by javier on 11/4/16.
 */
public class CartItem
{
    Item item;
    int quantity;

    public CartItem(Item newItem, int newQuantity)
    {
        item = newItem;
        quantity = newQuantity;
    }

    public int getQuantity()
    {
        return quantity;
    }
    public Double getPrice()
    {
        return item.getPrice()*quantity;
    }

    public void setQuantity(int newQuantity)
    {
        quantity = newQuantity;
    }

    public Item getItem()
    {
        return item;
    }

    @Override
    public boolean equals(Object obj)
    {
        if(obj instanceof Item && ((CartItem) obj).getItem().getId() == this.getItem().getId())
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
