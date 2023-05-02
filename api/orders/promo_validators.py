
def over_70_free_wagon(**kwargs):
    cart = kwargs.get('cart')
    days = kwargs.get('context')['days']
    all_items = cart.items.all()

    total_subcost = 0

    for item in all_items:
        subcost = item.quantity * (item.item.base_cost + (item.item.daily_cost * days)) 
        total_subcost += subcost

    if total_subcost >= 70.00:
        return (True, f'Successfully Added!')
    return (False, 'Your order subtotal needs to be more than $70 to qualify for this promotion.')

def first_order_20_off(**kwargs):
    user = kwargs.get('user')

    if user.is_anonymous:
        return (False, 'You must be logged in to qualify for this promotion.')

    if user.fullorder_set.first():
        return (False, 'This promotion is only valid for your first order.')
    
    return (True, f'Successfully Added!')