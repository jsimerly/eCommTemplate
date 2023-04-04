
#Would be a good idea to also return a message about why they don't qualify, but that's for a later day.


def over_70_free_wagon(**kwargs):
    cart = kwargs.get('cart')
    days = kwargs.get('context')['days']
    all_items = cart.items.all()

    total_subcost = 0

    for item in all_items:
        subcost = item.quantity * (item.item.base_cost + (item.item.daily_cost * days)) 
        total_subcost += subcost

    if total_subcost >= 70.00:
        return True
    return False

def first_order_20_off(**kwargs):
    user = kwargs.get('user')
    if user.orders.exists():
        return False
    return True