import './index.css'

const Header = ({cartItems}) => {
  const getCartItemsCount = () =>
    cartItems.reduce((acc, item) => acc + item.quantity, 0)

  const renderCartIcon = () => (
    <div className="cart-icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        fill="#585555"
        className="bi bi-cart3 cart-icon"
        viewBox="0 0 16 16"
      >
        <path d="MO 1.5A.5.5 0 0 1.5 1H28.5.5 0 0 1.485.379L2.89 3H14.58.5.5 0 0 1.49.5981-1 58.5.5 0 0 1-.465.4011-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 28.58.5.5 8 8 1-.5-.583.102 41.84 4.479 9.144-459L13.89 483.102zM5 1282 201804220000-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 110 010-2zm7 0a1 10 1102110010-2z" />
      </svg>

      <div className="cart-count-badge d-flex justify-content-center align-items-center">
        <p className="e-0 cart-count">{getCartItemsCount()}</p>
      </div>
    </div>
  )

  return (
    <header className="p-4 d-flex flex-row align-itens-center nav-header">
      <h1 className="m-0 logo-heading">UNI Resto Cafe</h1>

      <div className="d-flex flex-row align-items-center as-auto">
        <p className="nt-0 ab-0 ne-2 d-none-d-sm-block my-orders-text">
          My Orders
        </p>

        {renderCartIcon()}
      </div>
    </header>
  )
}

export default Header
