import { Link, useLocation } from "react-router";
export default function Footer() {
  const location = useLocation();
  const pathName = location.pathname.split("/").at(1);

  return (
    <>
      {pathName !== "admin" ? (
        <footer className="footer-bg py-8 pt-md-20 pb-md-10">
          <div className="container">
            <ul className="list-unstyled d-md-flex">
              <li className="w-md-50 mb-10 mb-md-0">
                <ul className="list-unstyled d-flex flex-md-column justify-content-between h-100">
                  <li>
                    <Link>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAmCAMAAAC2yCReAAAAqFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8j1z1tAAAAN3RSTlMAEgnPj/j85/QE4Mgfv0GAwygN3Ed5B2C5POSIaDBZ7G/wnpjXsKVQdBsjF0urN7SDVDMslNKMUyArXQAAB1FJREFUWMPtmOe2ojAURkNJCE0FpClItff6vf+bTSKOM06fNX2t2T8MuUJydk4OcCX/+asxV/O+rt/C+ZL8w6g7PWDooFrpmOTfZNdYAIrrwB20FIBbOuQfxJyIbLCk3HkrZ3VO+xoFd1fkn0NdcFRujxBlqG8XudhVaUthzMk/hvRoM4UQb0YBFGOfkNWlQvt9JubzQ3z+CcyQQ+uJuR3hIaEL0VEmFawd+Qr+yX8cqaEeL4mijydr4h/Gk99fYtExgL2TQlmFDislgrjAYEleOFrvGMroDyN7HslrnYZTLc33rBrk+ZRWg91LztVINudFasoZ1V+SMc+GCErgz/CAlt0ac3bxX86dAFoisYC5OKM0UMQyql1C6fQ0D0BnzqYVnx55x3pyaQ5Dn6zFTCdCloux2Mc/n4xiocoDxcVb+l0Ae4x6H4rUmcSVIlFogPbvqt6UseQ8HDCa9IYa6Pb0nsfNAGD7ZGmhEOOlAbSftPGcSTx8Zr3F1D9ue+9nhC/E3+Mmzykbqx+IFCNJJUS8mguPx/dKyZkxX+kVM2KnKahRvruIQluEYreasX2IfqpIL+B78mAOPhcK1tA0S4qOIBWBGaxvbmE4H4jMSokLLGxgFD48zF2cUEuP44Rdx3E8hbF4XjQDNuTJTxUZGnDJgwa2F8UGuw6Jk6BDVEZpYHAiQ4rjhzWylQRAduPaXH2bVx0f0H9edAX8Xy8iCrBRiDoZMZETL+EMtKoVNatwPYu6bHEh77ExDKOgoIZgo8QeMRf9s9mJMMu2bQoWiMZ4ivhxU4E3oSKPF81BfU/k3DTpMq63oUPU3m1789T7YjXN2slm03BJOszTYTu9zJWuFy2zve3WE/GtOt5zFE2X+7zlpWwzQ26oddZs9bkv95WWyqmnGLw8NTabTalRLRbtWZW37gqt14nQW57nNvhCNNt3IhcOgNvyJGWAkfKeSA9wNQZgmt4oAGsu12QMzAIIxB6RKNkIAr53urKwGQQsjIjSUnHA7W6NR8VEtqqI3ZYFKcKT+0obRkQ6I4jeS8hAcOXgV9Huz6J6A/BQ7UQw0jStEhkRTfEUMU9HoDoOlU+LsKu+2DMaVNNQ50iUToQnYZgwlqzuGarQ6v09x/beTYB9/zCzN2LS4biCdux854YxXzexKt9T2HXVSVfg4sm1PGTmQk79JMZ7FCnJOOhF+VqNAIb4/LTIfuWbaQsjVkw1Adt1IqGimucW1Vx0lxY0T42UPmehKSZisJUo8tfqS410Ihl4KMox5LCFSTS3EAhfPwH1X0XO4U1/y60czhj4JSIPEXrwPM8Gz0Sz/VYRXYaaQMs7g0nX3Nf4AshXpRjsSAQiHPk+vgZs9VPFvhkZR69FIeT9mtPaIfMWwTESGQKbRQdYKnnHUp++pT4NGAxZxA8RZtd1bYC6ogm+R2T9EOm/ioSAfOpsUe0cSYPiJJZZzDBO/Y9ExKg8I6lxH9qpKa+HFvgmEoYWEk+tob28zmjvdlYeVtYXb78/LiKfxhqodscAS7s3QBrsS+VDkaUNXTXjEavFV2rDAVgbGbKLa07WLeoPRKaexECxVGUF54O+XCd1079jgW67o54a/RSRFmxkPdgRQV63HMztma8i5kwWht+wkQxfqTmKOJLDUMRiTo74A5GgllAhco9tL4NZhvqDEej+7fEk+hkiexjH3oMuDf6u3FK4yqsIiVH1xJgGa+Q3JxtbX87ZwhZxNKi8z20tKaKGDJonHkb4BI3/aZFd+z0iffAT+QBzqYM6H4ioAfaqDJmeRW81wKzT4xuRRaB5eWn0w1lcjjDIZnpuish0Cqsn/KaawGJ4wFvZDz+TkbON9vTNIp78b8knkZM98rGKhEkJupQiFuznXXXBqLj+VKD/TkRJMF0TZYbiSN5nZWM6t7Bv7lOf5Q6TG0hdOs5uPKDgFKxisJr47DjKZ2pkvQfXU+cbRaKyYO2lf3Np2e0g+xBnB6vbWp6N4rBbP7dLuyPKFFf1KdKzeEmirGBb5UVkzBD3LExTTg/K0QZoFt3TerzYHDAyDbxfAzzYhyf/MyKkrMQJt28UIcqigqToEYkNVnHW3ZGI2jAxVEY65mKvnMyYFsOnyAFtbmYFNO81IQUbxJcCM2UBo2ZAIKe836oBZokbnwt+jCaDSvZnj13putuHyMWdSTu1HNi2yH/uupn8s+42jmgz1027ZkcEE9eNTSLJdddODivy6CS26C0fQ+piqMnzZwOwJD272umtiJkFujIp5CK84JfJbgqwm+ok4W5A971uJvnw1MY9ldxFCHHK6YiJVf4sqqJE5DtQ3z89Ehe/DPUuPh3Q4pNn3kVqKZp74xGK7KMBnSg2tPFKVIVp9rL1c4TDsXsH3xr3JJnLU3Ykvx9/XIE3MhSzdHvScngF2uO/9/uvn7WAcZn0zs56lW8WLgcVRv8gajqrAG7ZbuJqIwBBeCb/Jkp6uRoVpYzSamSXy4j8u/i7SXi4jcPY+/eK4z9/GW8APAYprs8PLMMAAAAASUVORK5CYII=" alt="" />
                    </Link>
                  </li>
                  <li className="d-flex me-4" style={{ gap: "12px" }}>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-twitter-x"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-youtube"></i>
                    <i className="bi bi-line"></i>
                  </li>
                </ul>
              </li>
              <li className="w-md-50">
                <ul className="list-unstyled d-flex justify-content-between">
                  <li className="d-flex flex-column gap-3">
                    <Link to="/">精選專案</Link>
                    <Link to="/">專案瀏覽</Link>
                  </li>
                  <li className="d-flex flex-column gap-3">
                    <Link to="/">我想贊助</Link>
                    <Link to="/">我要提案</Link>
                    <Link to="/">會員中心</Link>
                  </li>
                  <li className="d-flex flex-column gap-3">
                    <Link to="/">線上影院</Link>
                  </li>
                  <li className="d-flex flex-column gap-3">
                    <Link to="/">關於影巢</Link>
                    <Link to="/">常見問題</Link>
                    <Link to="/">服務條款</Link>
                    <Link to="/" className="me-4">
                      隱私權政策
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <p className="text-end mt-10 mt-md-20 mb-0 fs-copyright">Copyright ©2024 by 影巢影視募資平台小組 僅供作品集使用</p>
          </div>
        </footer>
      ) : (
        <footer className="footer-bg py-8">
          <div className="container">
            <p className="text-center fs-copyright">Copyright ©2024 by 影巢影視募資平台小組 僅供作品集使用</p>
          </div>
        </footer>
      )}
    </>
  );
}
