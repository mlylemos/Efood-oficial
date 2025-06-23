import styled from 'styled-components'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; 
  z-index: 1000;
  overflow: hidden;

  .cancelar {
    background: none;
    border: none;
    cursor: pointer;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: right;
    justify-content: center;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    display: block;
  }
}


  .fechar {
    background: none;
    border: none;
    position: absolute;
    top: 8px;
    right: 8px;
    cursor: pointer

    img {
      width: 16px;
      height: 16px;
    }
  }
`

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  inset: 0;
  z-index: 1000;
`

export const Sidebar = styled.aside`
  background-color: #e66767;
  color: #fff5f5;
  width: 400px;
  height: 100vh;
  padding: 16px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1001;
  overflow-y: auto;

  .close-icon {
    width: 16px;
    height: 16px;
    margin-left: auto;
    display: block;
    cursor: pointer;
    margin-bottom: 24px;
  }

ul {
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background-color: #fff5f5;
    color: #e66767;
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 0;
    margin-bottom: 16px;
    position: relative; 

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
      border-radius: 4px;
    }

    div {
      

      h3 {
        font-weight: bold;
        margin: 0;
      }

      span {
        font-size: 14px;
        color: #FFF8F2;
      }
    }

    button.cancelar {
      position: absolute;
      bottom: 8px;
      right: 8px;
      background: none;
      border: none;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
        object-fit: contain;
        display: block;
      }
    }
  }
}

`

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  margin: 16px 0;
  font-size: 14px;
`

export const ContinueButton = styled.button`
  background-color: #fff;
  color: #e66767;
  font-weight: bold;
  width: 100%;
  padding: 12px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 4px;
  display: block;
  color: #FFF8F2;
`
export const Row = styled.div`
  display: flex;
  gap: 0;
  margin-bottom: 16px;

  div {
    display: flex;
    flex-direction: column;
  }
`