<ul class="header__menu-action">
	<slot></slot>
</ul>

<style lang="scss">
	.header__menu-action {
		justify-self: flex-start;

		display: flex;
		flex-direction: row;
		justify-content: flex-start;
	}

	:global(.header__menu-action .header__item:not(:last-child)) {
		margin-right: 1rem;
	}
</style>