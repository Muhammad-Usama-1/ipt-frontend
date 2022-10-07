import React from "react";

function UserDetailCard() {
  return (
    <div className="profile-header">
      <div className="position-realative">
        <img
          className="profile--header-pic"
          src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/profile-bg1.5e2df945.jpg"
          alt=""
        />
        <div className="profile-img">
          <img
            className="profile-round-pic"
            src="https://templates.iqonic.design/socialv/bs5/react/build/static/media/11.e3b79bb5.png"
            alt=""
          />
          <h4>Usama</h4>
        </div>
      </div>
      <div className="profile-user-detail"></div>
      <div className="profile-info">
        <div className="icons">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG8SURBVFiF7Za/S1tRFMc/55qkUSyxDVVRSMigVQqFQlvoIIguFkH6J9jFDiqIg3+Bi4u46O5ot1bp0KnQQlEQFBVBhIcIVaRqUbS+X7ldRH28xDT68rLkO37vPed87juHw5Pugfl3Gj2FkCZEaTCUllGVFT0ZdnEAgYxGTymBTNjFb1CkVdmKXypSqsSxqCKZiGNaLuemg2m5aF1igJp4hPd9T3nzvJHGZDUicnWmtebt8BdsJ1sagNZUgvHB1yQT8ZznIsINnisFMgORKsVY/4u8xW9TIAC9HSkyTQ/vFBtIC9ozj3yeabssrR+wuHbAheUCYDv+KQwEINVQ6/NmPm6w8H2nYGwgLXjyuNrnrW4d/ldsIAA5hpuzv3Z4APdR0TOglNCWrvMmqfK/oyWV4PTs+itYjsv27onvnnR9+JxjQeZXbU2UT5M9xYQAsGkcMzTxw+eH1oL9w/OcfmgAe7/LDLCfB6DoIbSdLF9/7nq8zpfNxKLet3xb/oV1uQEBNo0/wQCYlsvE7IrHe/Wsnlj0gcebnlvn6MQsmK/se6ACUAGoAFQAFJrCP26lkmZHCTKiwQi/NoYgI/8A+Xl4tzgHD3MAAAAASUVORK5CYII="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVzSURBVFiFhZdriBZVGMd/z5nZXW1typTQcLuBZLBRSERBV6ISsg8FWUhEZRDlhy74xcK+RBGxUhBBUlFfoigwKLuIEhUFgWKs0uXbblmptdLu7OXdfWfmPH04M/Oeubx1YDgzz5k5//9zPyOqij/kmf1ryewtwDqUCLERQoRKPhNB5QKIy0uIyYgRjVFi1DgZ/E5iDujLt52o4BUEZMe+1YRmD3AX/zdqpPOtvHVq9+rL9oI+omObp0oCsmPfagJzBGEEgDRB0qQFKAcRcff5rL4McZPmj5o/i/RIqBzH2I06tnnKABCaPQgjqEUWZpHOHKRdyFKwtkpEatoWQs1BVfPLs4QCVsGWFhkhkz3uy6e/WEuW/QkgC7EDRUCMY13Ttn6vvpYlMelp32bBcoTnhXnA9TQuAOqA6st6ivVM3TKr93qDDEByiwHWAUiSeCyFNcMhz996EUeeup5nb1jHyuVh7zuVlkCT6lxYRam6A3puQtaFLtUAzXqmE+HF2zdw/3WjAFxx4RqWDx5m5/5JMA5AxQMupn5WKF2iHmFAbWQQG1W0QDDAnVeurxjr7qvWI/NTLigb/pU+VqhpXA9MJDJ5cfFTBKvC1z//ViHw5U+/IwqyOItarZJouKMGWpF7lyUyZFKzgBu7Pv2FA8cmSTPLx0cmeOmzcTABKEi341IKn4RUwf21OnCPTBRCboFCmvtu/FSH2177luFsjk6qICFqQtQE7rW0iw4M9kgXoNIWoH2sBJELQoqoNBRxsH7lIKtXrAB7NiRLnJhd4td/UpCAjWuXMzRgUEIIDN//0UUxrFkRcs3IMBevWsZfswlfTc5xfDr9DzIahaAR1k9YN567/RK2XH1p+fzq54d44sOjEAyy97EbOf/cc8q1ldte4YWtN7HthlEGw6CULyUZz3z0A7u/PlkH9oIQojwnewWnKED+EINZmkayLvXx3vZNPHrz5RVwgKGBgLEtV7Jl9EyvKfnZoJHBFjFANaBqBBRx/l+aaXDbtHEDAJlt65Kw647LkKXpZhBaItMAb9TrQiyoBGBM6zs73z3Iqgd3s/7xPUz+HVfWNqw9myG6SHeu0KYkYdyhoajzPoE2IgIEDekvf0wx9skh5ruWiak5Xj84XlkPA8PyoSGwXSTt+EuxwZ1kmvW6ge93wuo4MD4BYpyFCJg8Pd/C3QAGbILYpUIYG1TjHrDXSBruFJCgNT4OT5xEJQQJUAk53kYAk7d44/qOTQCNnQt8DUu8Pi4Q0+CWWXILhCCG6YWs3QLFhUHUgk2TsCRQBGGZii3gCCptGWI8DcMcpA+BotiJAbRjsDgXFBr77qhsIN4GbZsH5cbaSkAq4OriacZgHAEtrdAvC3LLlMevFgISFBs3CTTBATNtsHkQeieY9nKCZ/46gMsAlaC/lRrgAmKmQzCxg8yjM0efXuhyamah/DjuJBR+noo7LBvoHdE6ie2BS0BqhVPxYgXeYlBs9VwpdlrYvu8hrH0LaxGbOi1VQBPM4mmK9NPcxJgAsQmSzgHu2RZrHgkH5MVF5TSNuw+CR0KShYPgtFFVUJu7w2CHVmK6fll162oGIIyQrOM2rrukaG5Y5x6s947Xb7J0v6gq5uH3v0H1OrdQ/D0UL1okW8AvJC7Kxa3ZbiXFtIj2urbN7vqdffOea0MATZL7DN2joGf1NPUIi7jKlfcMqQAI2JTiR0b6NTXxI1xiy8BWwPs5ffCdC00y+4nY7ih9h2nXxmlUfdbGzwCgqAz+aAeGN+vbD0xWCJT73Ds2GhqzTTW7QFQjVM9E7LBae4agw2oGhlENRbMA1fyUKhkSpCqhFWRRsYsiMo/KPEZihRkIJrNU39APnjzm4/0LS7aUIe3SN2MAAAAASUVORK5CYII="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAATJQTFRF3Ecu3Egv3Egw3Ekw3Uox3Usy3Usz3U013k833lA43lI63lM73lM83lQ931Y/31hB31hC31lC4FxG4F1H4WBK4WJM4WJN4WRP4mVQ4mdS4mdT4mhU42pV42xY425a5G9c5HJe5HJf5XVi5XZj5Xdk5ntp5nxr539u54Fw6IR06IZ16IZ26Il56Yt76Yx86Yx96o5/6pGC6pKD65aI7JqM7JuO7aCT7aGU7aOW7qOX7qWZ7qeb76md8K+k8LCl8LCm8bWr872087+288C39czF9s/I9tDK9tLL99PN99TP99XP99fS+NnU+NrV+d/b+eHd+uLe+uPf+uTg+uTh+uXh+ufk++nm++rn/O3r/O7r/O/t/PDu/PHv/fPy/fTz/vj3/vn4/vr5/vv7//39//7+////rigs4wAAARtJREFUOE/N0N0/wmAYxvFbW4VJoZGS94TRmMRDIWRYlrzMezzs+v//BScd9Mw2h/xOr+/nPriJ/lOze7ReCgOTSF5vhQG633TT6sYQrShLY76gdtdKcOec+FRb8wWLqBYfMogFAhmFZWcC8UBAmP8VLLwW32Veel4NAtLl1z7d2E8BF4iIBolifb6LlJ/pKS95d8OBkGOIe4qbpnkBAO2u/EwJoMzjESkJADrr3igLoAoUDHBwV2cfAByg+hN0qKNY+nj06C0XOQgGle21eu5kOBgwptUS00o4yJ02/MHLgKWzXe1w7iztAQwoGFxWo5aujuzY/aMlMAFkgasWrMdGx75tAs1jF1kBUN0VX+3WyVOmwnqqZLz7X/YNeOtZYOgD+FQAAAAASUVORK5CYII="
            alt=""
          />
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAD5AAAA+QEdhgSBAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAPNQTFRFUKvxUavxUazxUqzxU6zxVq7xWK/yWa/yWrDyXLHyXrLyZrbzZ7bzaLfzabfza7jzbLnzbrnzcLr0cbv0crv0dr30d770eL70er/0e7/0f8L1gcP1hsX1iMb1isf2jMj2jsn2kcr2lMz2lcz3mc73nND3n9H3otL4o9P4pdT4ptT4p9X4qdb4qtb4r9j5r9n5str5tdv5uN35ud35ut76vN/6wuL6yOX7y+b7zef7z+j70On70un71Or81Ov82e382+783O783u/84fH95vP96vX96/X97vf+8Pj+8fj+9vv+9/v++fz//f7//v7//v//////30cB7QAAAMdJREFUGBndwYlaAVEABtDfxJDKGlqHZC9L21RaxhbJ9r//0+DLHffe8QTOwd4KnoagMQNwnXzOuXBiOK8bcOWdMDYiE65NB7zA1hsHEfz75kb7OQWXTY5v/Fg5pDDPYavMlZ+CCZxRuIMk0OfarP/SpGBBcp2dUpeB5IkL6o4gydFjCEWbugcogpUxVRkoDLtLxTs0VSpmSWgOWpQV4RUt/VF4xA4Jh0LdB9XxlVXpUBhZ8Lj8oPBbM7FL/Lbx2vuy79MG9tESkyBT9XTYC5sAAAAASUVORK5CYII="
            alt=""
          />
          <img
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
        <div className="user-follower-info">
          <div>
            <p>Post</p>
            <span>690</span>
          </div>
          <div>
            <p>Followers</p>
            <span>690</span>
          </div>
          <div>
            <p>Following</p>
            <span>690</span>
          </div>
        </div>
        {/* Follwers info end */}
      </div>
      {/* Profile info end */}
    </div>
  );
}

export default UserDetailCard;
