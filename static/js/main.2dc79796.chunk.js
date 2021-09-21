(this.webpackJsonpfrontend_base_dapp = this.webpackJsonpfrontend_base_dapp || []).push([
	[ 0 ],
	{
		217: function(t) {
			t.exports = JSON.parse(
				'[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reveal","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"revealed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]'
			);
		},
		243: function(t, e) {},
		266: function(t, e) {},
		268: function(t, e) {},
		345: function(t, e) {},
		347: function(t, e) {},
		380: function(t, e) {},
		385: function(t, e) {},
		387: function(t, e) {},
		394: function(t, e) {},
		407: function(t, e) {},
		430: function(t, e) {},
		439: function(t, e) {},
		441: function(t, e) {},
		511: function(t, e, n) {},
		512: function(t, e, n) {},
		513: function(t, e, n) {
			'use strict';
			n.r(e);
			var a,
				i,
				r,
				o,
				s,
				u,
				p,
				c,
				l,
				d,
				y,
				b,
				m = n(1),
				f = n(83),
				h = n.n(f),
				g = n(117),
				x = n(15),
				w = n(56),
				v = n(18),
				j = n.n(v),
				O = n(67),
				T = n(66),
				C = n.n(T),
				k = n(216),
				M = n.n(k),
				S = n(217),
				E = n(68),
				A = n(218),
				_ = n(17),
				I = { loading: !1, account: null, smartContract: null, web3: null, errorMsg: '' },
				N = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : I,
						e = arguments.length > 1 ? arguments[1] : void 0;
					switch (e.type) {
						case 'CONNECTION_REQUEST':
							return Object(_.a)(Object(_.a)({}, I), {}, { loading: !0 });
						case 'CONNECTION_SUCCESS':
							return Object(_.a)(
								Object(_.a)({}, t),
								{},
								{
									loading: !1,
									account: e.payload.account,
									smartContract: e.payload.smartContract,
									web3: e.payload.web3
								}
							);
						case 'CONNECTION_FAILED':
							return Object(_.a)(Object(_.a)({}, I), {}, { loading: !1, errorMsg: e.payload });
						case 'UPDATE_ACCOUNT':
							return Object(_.a)(Object(_.a)({}, t), {}, { account: e.payload.account });
						default:
							return t;
					}
				},
				U = { loading: !1, name: '', totalSupply: 0, cost: 0, error: !1, errorMsg: '' },
				F = function() {
					var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : U,
						e = arguments.length > 1 ? arguments[1] : void 0;
					switch (e.type) {
						case 'CHECK_DATA_REQUEST':
							return Object(_.a)(Object(_.a)({}, t), {}, { loading: !0, error: !1, errorMsg: '' });
						case 'CHECK_DATA_SUCCESS':
							return Object(_.a)(
								Object(_.a)({}, t),
								{},
								{
									loading: !1,
									name: e.payload.name,
									totalSupply: e.payload.totalSupply,
									cost: e.payload.cost,
									error: !1,
									errorMsg: ''
								}
							);
						case 'CHECK_DATA_FAILED':
							return Object(_.a)(Object(_.a)({}, U), {}, { loading: !1, error: !0, errorMsg: e.payload });
						default:
							return t;
					}
				},
				L = Object(E.b)({ blockchain: N, data: F }),
				D = [ A.a ],
				K = Object(E.c)(E.a.apply(void 0, D)),
				z = Object(E.d)(L, K),
				B = function(t) {
					return { type: 'CHECK_DATA_FAILED', payload: t };
				},
				H = function(t) {
					return (function() {
						var t = Object(O.a)(
							j.a.mark(function t(e) {
								var n, a, i;
								return j.a.wrap(
									function(t) {
										for (;;)
											switch ((t.prev = t.next)) {
												case 0:
													return (
														e({ type: 'CHECK_DATA_REQUEST' }),
														(t.prev = 1),
														(t.next = 4),
														z.getState().blockchain.smartContract.methods.name().call()
													);
												case 4:
													return (
														(n = t.sent),
														(t.next = 7),
														z
															.getState()
															.blockchain.smartContract.methods.totalSupply()
															.call()
													);
												case 7:
													return (
														(a = t.sent),
														(t.next = 10),
														z.getState().blockchain.smartContract.methods.cost().call()
													);
												case 10:
													(i = t.sent),
														e({
															type: 'CHECK_DATA_SUCCESS',
															payload: { name: n, totalSupply: a, cost: i }
														}),
														(t.next = 18);
													break;
												case 14:
													(t.prev = 14),
														(t.t0 = t.catch(1)),
														console.log(t.t0),
														e(B('Could not load data from contract.'));
												case 18:
												case 'end':
													return t.stop();
											}
									},
									t,
									null,
									[ [ 1, 14 ] ]
								);
							})
						);
						return function(e) {
							return t.apply(this, arguments);
						};
					})();
				},
				R = function(t) {
					return { type: 'CONNECTION_FAILED', payload: t };
				},
				q = function(t) {
					return (function() {
						var e = Object(O.a)(
							j.a.mark(function e(n) {
								return j.a.wrap(function(e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												n({ type: 'UPDATE_ACCOUNT', payload: { account: t } }), n(H());
											case 2:
											case 'end':
												return e.stop();
										}
								}, e);
							})
						);
						return function(t) {
							return e.apply(this, arguments);
						};
					})();
				},
				P = n(16),
				W = P.a.div(
					a ||
						(a = Object(x.a)([
							'\n\tbackground-color: var(--dark-grey);\n\tbackground-image: ',
							';\n\tbackground-size: cover;\n\tbackground-position: center;\n\twidth: 100%;\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n'
						])),
					function(t) {
						var e = t.image;
						return e ? 'url('.concat(e, ')') : 'none';
					}
				),
				Y = (P.a.div(i || (i = Object(x.a)([ '\n\theight: 8px;\n\twidth: 8px;\n' ]))),
				P.a.div(r || (r = Object(x.a)([ '\n\theight: 16px;\n\twidth: 16px;\n' ])))),
				Q = P.a.div(o || (o = Object(x.a)([ '\n\theight: 24px;\n\twidth: 24px;\n' ]))),
				J = (P.a.div(s || (s = Object(x.a)([ '\n\theight: 32px;\n\twidth: 32px;\n' ]))),
				P.a.div(
					u ||
						(u = Object(x.a)([
							'\n\tdisplay: flex;\n\tflex: ',
							';\n\tflex-direction: ',
							';\n\tjustify-content: ',
							';\n\talign-items: ',
							';\n\tbackground-color: ',
							';\n\twidth: 100%;\n\tbackground-image: ',
							';\n\tbackground-size: cover;\n\tbackground-position: center;\n'
						])),
					function(t) {
						var e = t.flex;
						return e || 0;
					},
					function(t) {
						var e = t.fd;
						return e || 'column';
					},
					function(t) {
						var e = t.jc;
						return e || 'flex-start';
					},
					function(t) {
						var e = t.ai;
						return e || 'flex-start';
					},
					function(t) {
						return t.test ? 'pink' : 'none';
					},
					function(t) {
						var e = t.image;
						return e ? 'url('.concat(e, ')') : 'none';
					}
				)),
				G = P.a.h2(
					p ||
						(p = Object(x.a)([
							'\n\tcolor: var(--white);\n\tfont-weight: 500;\n\tline-height: 1.6;\n\tpadding: 0;\n'
						]))
				),
				V = P.a.p(
					c ||
						(c = Object(x.a)([
							'\n\tcolor: var(--white);\n\tfont-size: 18px;\n\tfont-weight: 500;\n\tline-height: 1.6;\n'
						]))
				),
				X = (P.a.p(
					l || (l = Object(x.a)([ '\n\tcolor: var(--white);\n\tfont-size: 14px;\n\tline-height: 1.6;\n' ]))
				),
				P.a.p(
					d || (d = Object(x.a)([ '\n\tcolor: var(--white);\n\tfont-size: 12px;\n\tline-height: 1.6;\n' ]))
				)),
				Z = (P.a.div(y || (y = Object(x.a)([ '\n\t:active {\n\t\topacity: 0.6;\n\t}\n' ]))),
				document.getElementsByClassName('accordion'));
			for (b = 0; b < Z.length; b++)
				Z[b].addEventListener('click', function() {
					this.classList.toggle('active');
					var t = this.nextElementSibling;
					t.style.maxHeight ? (t.style.maxHeight = null) : (t.style.maxHeight = t.scrollHeight + 'px');
				});
			window.onscroll = function() {
				window.pageYOffset >= nt
					? ($.classList.add('sticky'), tt.classList.add('sticky-button'), et.classList.add('sticky-button'))
					: ($.classList.remove('sticky'),
						tt.classList.remove('sticky-button'),
						et.classList.remove('sticky-button'));
			};
			var $ = document.getElementById('navbar'),
				tt = document.querySelector('.nav-button'),
				et = document.querySelector('.mint-button'),
				nt = $.offsetTop + 200;
			document.addEventListener('DOMContentLoaded', function() {
				var t = document.querySelector('#connect-button'),
					e = document.querySelector('#hidden-quant');
				t.addEventListener('click', function() {
					e.style.display = 'block';
				});
			});
			var at,
				it,
				rt,
				ot = n.p + 'static/media/characters.6009e4fc.gif',
				st = n(9),
				ut = P.a.button(
					at ||
						(at = Object(x.a)([
							'\n  padding: 10px 30px;\n  border-radius: 50px;\n  border: none;\n  background-color: #ffffff;\n  font-weight: bold;\n  color: #000000;\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n'
						]))
				),
				pt = P.a.div(
					it ||
						(it = Object(x.a)([
							'\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n'
						]))
				),
				ct = P.a.img(
					rt ||
						(rt = Object(x.a)([
							'\n  width: 200px;\n  height: 200px;\n  @media (min-width: 767px) {\n    width: 350px;\n    height: 350px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n'
						]))
				);
			var lt = function() {
					var t = Object(w.b)(),
						e = Object(w.c)(function(t) {
							return t.blockchain;
						}),
						n = Object(w.c)(function(t) {
							return t.data;
						}),
						a = Object(m.useState)('Connect your Metamask Wallet'),
						i = Object(g.a)(a, 2),
						r = i[0],
						o = i[1],
						s = Object(m.useState)(!1),
						u = Object(g.a)(s, 2),
						p = u[0],
						c = u[1],
						l = function() {
							'' !== e.account && null !== e.smartContract && t(H(e.account));
						};
					return (
						Object(m.useEffect)(
							function() {
								l();
							},
							[ e.account ]
						),
						Object(st.jsx)(W, {
							style: { backgroundColor: '#111' },
							id: 'mint-body',
							children: Object(st.jsxs)(J, {
								flex: 1,
								ai: 'center',
								children: [
									Object(st.jsx)(Q, {}),
									Object(st.jsxs)(pt, {
										flex: 1,
										style: { padding: 24 },
										children: [
											Object(st.jsxs)(J, {
												flex: 1,
												jc: 'center',
												ai: 'center',
												children: [
													Object(st.jsx)(G, {
														style: {
															textAlign: 'center',
															fontSize: 40,
															fontWeight: 'bold',
															fontFamily: 'pixel'
														},
														children: 'Mint a Knifty Knight'
													}),
													Object(st.jsx)(ct, { alt: 'characters', src: ot }),
													Object(st.jsx)(Q, {}),
													Object(st.jsxs)(V, {
														style: {
															textAlign: 'center',
															fontSize: 40,
															fontWeight: 'bold'
														},
														id: 'hidden-quant',
														children: [ n.totalSupply, '/10000' ]
													})
												]
											}),
											Object(st.jsx)(Q, {}),
											Object(st.jsx)(J, {
												flex: 1,
												jc: 'center',
												ai: 'center',
												style: { backgroundColor: '#111', padding: 0, fontSize: 20 },
												children:
													1e4 == Number(n.totalSupply)
														? Object(st.jsxs)(st.Fragment, {
																children: [
																	Object(st.jsx)(V, {
																		style: {
																			textAlign: 'center',
																			margin: 0,
																			fontSize: 20,
																			padding: 0
																		},
																		children: 'The sale has ended.'
																	}),
																	Object(st.jsx)(Y, {}),
																	Object(st.jsxs)(X, {
																		style: { textAlign: 'center' },
																		children: [
																			'You can still find Knifty Knights on',
																			' ',
																			Object(st.jsx)('a', {
																				target: '_blank',
																				href:
																					'https://opensea.io/collection/knifty-knights',
																				children: 'Opensea.io'
																			})
																		]
																	})
																]
															})
														: Object(st.jsxs)(st.Fragment, {
																children: [
																	Object(st.jsx)(X, {
																		style: {
																			textAlign: 'center',
																			fontSize: 20,
																			padding: 0
																		},
																		children: r
																	}),
																	'' === e.account || null === e.smartContract
																		? Object(st.jsxs)(J, {
																				ai: 'center',
																				jc: 'center',
																				children: [
																					Object(st.jsx)(ut, {
																						onClick: function(e) {
																							e.preventDefault(),
																								t(
																									(function() {
																										var t = Object(O.a)(
																											j.a.mark(
																												function t(
																													e
																												) {
																													var n,
																														a,
																														i,
																														r,
																														o;
																													return j.a.wrap(
																														function(
																															t
																														) {
																															for (;;)
																																switch ((t.prev =
																																	t.next)) {
																																	case 0:
																																		if (
																																			(e(
																																				{
																																					type:
																																						'CONNECTION_REQUEST'
																																				}
																																			),
																																			(n = window),
																																			!(a =
																																				n.ethereum) ||
																																				!a.isMetaMask)
																																		) {
																																			t.next = 21;
																																			break;
																																		}
																																		return (
																																			C.a.setProvider(
																																				a
																																			),
																																			(i = new M.a(
																																				a
																																			)),
																																			(t.prev = 6),
																																			(t.next = 9),
																																			a.request(
																																				{
																																					method:
																																						'eth_requestAccounts'
																																				}
																																			)
																																		);
																																	case 9:
																																		return (
																																			(r =
																																				t.sent),
																																			(t.next = 12),
																																			a.request(
																																				{
																																					method:
																																						'net_version'
																																				}
																																			)
																																		);
																																	case 12:
																																		137 ==
																																		t.sent
																																			? ((o = new C.a(
																																					S,
																																					'0x3a831879368cde6ad7497a52f8b6d2d572d37dad'
																																				)),
																																				e(
																																					{
																																						type:
																																							'CONNECTION_SUCCESS',
																																						payload: {
																																							account:
																																								r[0],
																																							smartContract: o,
																																							web3: i
																																						}
																																					}
																																				),
																																				a.on(
																																					'accountsChanged',
																																					function(
																																						t
																																					) {
																																						e(
																																							q(
																																								t[0]
																																							)
																																						);
																																					}
																																				),
																																				a.on(
																																					'chainChanged',
																																					function() {
																																						window.location.reload();
																																					}
																																				))
																																			: e(
																																					R(
																																						'Change network to Polygon.'
																																					)
																																				),
																																			(t.next = 19);
																																		break;
																																	case 16:
																																		(t.prev = 16),
																																			(t.t0 = t.catch(
																																				6
																																			)),
																																			e(
																																				R(
																																					'Something went wrong.'
																																				)
																																			);
																																	case 19:
																																		t.next = 22;
																																		break;
																																	case 21:
																																		e(
																																			R(
																																				'Please install Metamask at https://metamask.io/download.'
																																			)
																																		);
																																	case 22:
																																	case 'end':
																																		return t.stop();
																																}
																														},
																														t,
																														null,
																														[
																															[
																																6,
																																16
																															]
																														]
																													);
																												}
																											)
																										);
																										return function(e) {
																											return t.apply(
																												this,
																												arguments
																											);
																										};
																									})()
																								),
																								o('Click below to mint'),
																								l();
																						},
																						style: {
																							margin: 12,
																							padding: 20,
																							borderRadius: 5,
																							border: 'none',
																							background: 'orangered',
																							color: 'white',
																							width: 200
																						},
																						id: 'connect-button',
																						children: 'CONNECT'
																					}),
																					Object(st.jsx)(V, {
																						style: {
																							textAlign: 'center',
																							fontSize: 20
																						},
																						children:
																							'1 Knifty Knight costs 30 MATIC.'
																					}),
																					'' !== e.errorMsg
																						? Object(st.jsxs)(st.Fragment, {
																								children: [
																									Object(st.jsx)(Y, {}),
																									Object(st.jsx)(X, {
																										style: {
																											textAlign:
																												'center'
																										},
																										children: e.errorMsg
																									})
																								]
																							})
																						: null
																				]
																			})
																		: Object(st.jsx)(J, {
																				ai: 'center',
																				jc: 'center',
																				fd: 'row',
																				children: Object(st.jsx)(ut, {
																					disabled: p ? 1 : 0,
																					onClick: function(a) {
																						var i;
																						a.preventDefault(),
																							(i = 1) <= 0 ||
																								(o(
																									'Minting your Knifty Knight...'
																								),
																								c(!0),
																								e.smartContract.methods
																									.mint(e.account, i)
																									.send({
																										gasLimit: '285000',
																										to:
																											'0x3a831879368cde6ad7497a52f8b6d2d572d37dad',
																										from: e.account,
																										value: e.web3.utils.toWei(
																											(n.cost /
																												1e18 *
																												i).toString(),
																											'ether'
																										)
																									})
																									.once('error', function(
																										t
																									) {
																										console.log(t),
																											o(
																												'Sorry, something went wrong please try again later.'
																											),
																											c(!1);
																									})
																									.then(function(n) {
																										o(
																											'Huzzah! You now own a Knifty Knight. go visit Opensea.io to view it.'
																										),
																											c(!1),
																											t(H(e.account));
																									})),
																							l();
																					},
																					style: {
																						margin: 12,
																						padding: 20,
																						borderRadius: 5,
																						border: 'none',
																						background: 'orangered',
																						color: 'white',
																						width: 200
																					},
																					children: p ? 'BUSY' : 'BUY 1'
																				})
																			})
																]
															})
											})
										]
									})
								]
							})
						})
					);
				},
				dt = function(t) {
					t &&
						t instanceof Function &&
						n.e(3).then(n.bind(null, 517)).then(function(e) {
							var n = e.getCLS,
								a = e.getFID,
								i = e.getFCP,
								r = e.getLCP,
								o = e.getTTFB;
							n(t), a(t), i(t), r(t), o(t);
						});
				};
			n(511), n(512);
			h.a.render(
				Object(st.jsx)(w.a, { store: z, children: Object(st.jsx)(lt, {}) }),
				document.getElementById('root')
			),
				dt();
		}
	},
	[ [ 513, 1, 2 ] ]
]);
//# sourceMappingURL=main.2dc79796.chunk.js.map
