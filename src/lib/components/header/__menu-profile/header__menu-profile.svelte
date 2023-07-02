<ul class="header__menu-profile">
	<slot></slot>
</ul>

<style lang="scss">
	.header__menu-profile {
		width: 20%;
		justify-self: flex-end;

		display: flex;
		flex-direction: row;
		justify-content: flex-end;
	}

	:global(.header__menu-profile .header__item:not(:last-child)) {
		margin-right: 1rem;
	}
</style>