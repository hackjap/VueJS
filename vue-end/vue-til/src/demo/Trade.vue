<template>
	<div id="trade">
		<!-- Off-Canvas Wrapper-->
		<div class="offcanvas-wrapper">
			<!-- Page Content-->
			<!-- Register page -->
			<section class="main">
				<div class="container padding-bottom-3x mb-1">
					<div class="subject">
						상품등록
					</div>
					<hr class="barrier" />
					<div class="image">
						<div class="image-title font-title">
							상품이미지
							<span class="asterisk">*</span>
							<span>(0/13)</span>
						</div>
						<div
							class="image-image inputbox"
							style="background: url('./img/img_register.png')"
						>
							<input
								class="image-image inputbox"
								type="file"
								accept="image/jpg, image/jpeg, image/png"
								multiple
								style="opacity: 0"
							/>
						</div>

						<div class="image-description">
							<div class="image-dscription-contents">
								* 상품 이미지는 640x640에 최적화 되어 있습니다.
							</div>
							<div class="image-dscription-contents">
								- 이미지는 상품등록 시 정사각형으로 짤려서 등록됩니다.
							</div>
							<div class="image-dscription-contents">
								- 이미지를 클릭 할 경우 원본이미지를 확인할 수 있습니다.
							</div>
							<div class="image-dscription-contents">
								- 이미지를 클릭 후 이동하여 등록순서를 변경할 수 있습니다.
							</div>
							<div class="image-dscription-contents">
								- 큰 이미지일경우 이미지가 깨지는 경우가 발생할 수 있습니다.
							</div>
							<div class="image-dscription-contents">
								- 최대 지원 사이즈인 640 X 640 으로 리사이즈 해서
								올려주세요.(개당 이미지 최대 10M)
							</div>
						</div>
					</div>
					<hr />
					<div class="name">
						<div class="name-title font-title">
							상품명
							<span class="asterisk">*</span>
						</div>
						<input
							class="name-input form-control inputbox"
							placeholder="제목을 입력해주세요"
						/>
					</div>
					<hr />
					<div class="category">
						<div class="category-title font-title">
							카테고리
							<span class="asterisk">*</span>
						</div>
						<div class="category-input">
							<div class="category-input-item">
								<ul class="category-list scroll-container">
									<li
										style="
                      margin: 0 auto;
                      width: 80%;
                      color: white;
                      background-color: rgb(13, 169, 239);
                    "
									>
										대분류
									</li>
									<li><button>전체</button></li>
									<li><button>대형견</button></li>
									<li><button>중형견</button></li>
									<li><button>소형견</button></li>
									<li><button>대형견</button></li>
									<li><button>중형견</button></li>
									<li><button>소형견</button></li>
								</ul>
							</div>
							<div class="category-input-item">
								<ul class="category-list scroll-container">
									<li
										style="
                      margin: 0 auto;
                      width: 80%;
                      color: white;
                      background-color: rgb(13, 169, 239);
                    "
									>
										중분류
									</li>
									<li><button>배변용품</button></li>
									<li><button>사료</button></li>
									<li><button>악세서리</button></li>
									<li><button>의류</button></li>
									<li><button>기타</button></li>
									<li><button>배변용품</button></li>
									<li><button>사료</button></li>
									<li><button>악세서리</button></li>
									<li><button>의류</button></li>
									<li><button>기타</button></li>
								</ul>
							</div>
						</div>
					</div>

					<hr />
					<div class="price">
						<div class="price-title font-title">
							가격
							<span class="asterisk">*</span>
						</div>
						<input
							class="price-input form-control inputbox"
							placeholder="상품 가격을 입력해주세요"
						/>
						<div class="price-input-checkbox">
							<input type="checkbox" />
							<span>가격 협의 가능</span>
						</div>
					</div>
					<hr />

					<div class="description">
						<div class="description-title font-title">
							설명
							<span class="asterisk">*</span>
						</div>

						<textarea
							class="description-input inputbox"
							placeholder="상품 설명을 입력해주세요"
						></textarea>
						<div class="description-count">
							0/2000
						</div>
					</div>

					<div class="regist">
						<div class="register_title"></div>
						<div class="regist_container">
							<button type="button" class="btn btn-primary form-control">
								등록하기
							</button>
						</div>
					</div>
				</div>
			</section>

			<!-- Featured Products Carousel-->
			<section class="container padding-top-3x padding-bottom-3x">
				<h3 class="text-center mb-30">
					상품
				</h3>
				<div
					class="owl-carousel"
					data-owl-carousel='{ "nav": false, "dots": true, "margin": 30, "responsive": {"0":{"items":1},"576":{"items":2},"768":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
				>
					<!-- Product-->
					<div class="grid-item">
						<div class="product-card">
							<div class="product-badge text-danger">
								22% Off
							</div>
							<a class="product-thumb" href="shop-single.html"
								><img src="img/shop/products/09.jpg" alt="Product"
							/></a>
							<h3 class="product-title">
								<a href="shop-single.html">Rocket Dog</a>
							</h3>
							<h4 class="product-price"><del>$44.95</del>$34.99</h4>
							<div class="product-buttons">
								<button
									class="btn btn-outline-secondary btn-sm btn-wishlist"
									data-toggle="tooltip"
									title="Whishlist"
								>
									<i class="icon-heart"></i>
								</button>
								<button
									class="btn btn-outline-primary btn-sm"
									data-toast
									data-toast-type="success"
									data-toast-position="topRight"
									data-toast-icon="icon-circle-check"
									data-toast-title="Product"
									data-toast-message="successfuly added to cart!"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<!-- Product-->
					<div class="grid-item">
						<div class="product-card">
							<div class="rating-stars">
								<i class="icon-star filled"></i><i class="icon-star filled"></i
								><i class="icon-star filled"></i><i class="icon-star filled"></i
								><i class="icon-star"></i>
							</div>
							<a class="product-thumb" href="shop-single.html"
								><img src="img/shop/products/03.jpg" alt="Product"
							/></a>
							<h3 class="product-title">
								<a href="shop-single.html">Oakley Kickback</a>
							</h3>
							<h4 class="product-price">
								$155.00
							</h4>
							<div class="product-buttons">
								<button
									class="btn btn-outline-secondary btn-sm btn-wishlist"
									data-toggle="tooltip"
									title="Whishlist"
								>
									<i class="icon-heart"></i>
								</button>
								<button
									class="btn btn-outline-primary btn-sm"
									data-toast
									data-toast-type="success"
									data-toast-position="topRight"
									data-toast-icon="icon-circle-check"
									data-toast-title="Product"
									data-toast-message="successfuly added to cart!"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<!-- Product-->
					<div class="grid-item">
						<div class="product-card">
							<a class="product-thumb" href="shop-single.html"
								><img src="img/shop/products/12.jpg" alt="Product"
							/></a>
							<h3 class="product-title">
								<a href="shop-single.html">Vented Straw Fedora</a>
							</h3>
							<h4 class="product-price">
								$49.50
							</h4>
							<div class="product-buttons">
								<button
									class="btn btn-outline-secondary btn-sm btn-wishlist"
									data-toggle="tooltip"
									title="Whishlist"
								>
									<i class="icon-heart"></i>
								</button>
								<button
									class="btn btn-outline-primary btn-sm"
									data-toast
									data-toast-type="success"
									data-toast-position="topRight"
									data-toast-icon="icon-circle-check"
									data-toast-title="Product"
									data-toast-message="successfuly added to cart!"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<!-- Product-->
					<div class="grid-item">
						<div class="product-card">
							<div class="rating-stars">
								<i class="icon-star filled"></i><i class="icon-star filled"></i
								><i class="icon-star filled"></i><i class="icon-star filled"></i
								><i class="icon-star filled"></i>
							</div>
							<a class="product-thumb" href="shop-single.html"
								><img src="img/shop/products/11.jpg" alt="Product"
							/></a>
							<h3 class="product-title">
								<a href="shop-single.html">Top-Sider Fathom</a>
							</h3>
							<h4 class="product-price">
								$90.00
							</h4>
							<div class="product-buttons">
								<button
									class="btn btn-outline-secondary btn-sm btn-wishlist"
									data-toggle="tooltip"
									title="Whishlist"
								>
									<i class="icon-heart"></i>
								</button>
								<button
									class="btn btn-outline-primary btn-sm"
									data-toast
									data-toast-type="success"
									data-toast-position="topRight"
									data-toast-icon="icon-circle-check"
									data-toast-title="Product"
									data-toast-message="successfuly added to cart!"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<!-- Product-->
					<div class="grid-item">
						<div class="product-card">
							<a class="product-thumb" href="shop-single.html"
								><img src="img/shop/products/04.jpg" alt="Product"
							/></a>
							<h3 class="product-title">
								<a href="shop-single.html">Waist Leather Belt</a>
							</h3>
							<h4 class="product-price">
								$47.00
							</h4>
							<div class="product-buttons">
								<button
									class="btn btn-outline-secondary btn-sm btn-wishlist"
									data-toggle="tooltip"
									title="Whishlist"
								>
									<i class="icon-heart"></i>
								</button>
								<button
									class="btn btn-outline-primary btn-sm"
									data-toast
									data-toast-type="success"
									data-toast-position="topRight"
									data-toast-icon="icon-circle-check"
									data-toast-title="Product"
									data-toast-message="successfuly added to cart!"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
					<!-- Product-->
					<div class="grid-item">
						<div class="product-card">
							<div class="product-badge text-danger">
								50% Off
							</div>
							<a class="product-thumb" href="shop-single.html"
								><img src="img/shop/products/01.jpg" alt="Product"
							/></a>
							<h3 class="product-title">
								<a href="shop-single.html">Unionbay Park</a>
							</h3>
							<h4 class="product-price"><del>$99.99</del>$49.99</h4>
							<div class="product-buttons">
								<button
									class="btn btn-outline-secondary btn-sm btn-wishlist"
									data-toggle="tooltip"
									title="Whishlist"
								>
									<i class="icon-heart"></i>
								</button>
								<button
									class="btn btn-outline-primary btn-sm"
									data-toast
									data-toast-type="success"
									data-toast-position="topRight"
									data-toast-icon="icon-circle-check"
									data-toast-title="Product"
									data-toast-message="successfuly added to cart!"
								>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<style scoped>
.offcanvas-wrapper {
	z-index: 1;
}
</style>
