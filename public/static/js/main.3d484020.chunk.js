(this['webpackJsonpmesto-react'] = this['webpackJsonpmesto-react'] || []).push([[0], {
  15(e, t, n) {},
  16(e, t, n) {
    n.r(t); const a = n(0); const o = n(1); const c = n.n(o); const s = n(6); const i = n.n(s); const r = (n(15), n(9)); const l = n(2); const u = `${n.p}static/media/header_logo.a307e1c4.svg`; const p = function () { return Object(a.jsx)('header', { className: 'header', children: Object(a.jsx)('img', { className: 'header__logo', src: u, alt: '\u041b\u043e\u0433\u043e' }) }); }; const d = `${n.p}static/media/avatar-redact.a086f758.svg`; const m = `${n.p}static/media/edit_button.8667ac4a.svg`; const h = `${n.p}static/media/add-button.d86bb2ed.svg`; const j = n(7); const _ = n(8); const f = new (function () { function e(t) { const n = t.address; const a = t.token; const o = t.cohort; Object(j.a)(this, e), this._token = a, this._cohort = o, this._address = n; } return Object(_.a)(e, [{ key: '_getResponseData', value(e) { return e.ok ? e.json() : Promise.reject('\u041e\u0448\u0438\u0431\u043a\u0430: '.concat(e.status)); } }, { key: 'getInitialCards', value() { const e = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/cards'), { headers: { authorization: this._token } }).then(((t) => e._getResponseData(t))); } }, { key: 'addNewCards', value(e) { const t = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/cards'), { method: 'POST', headers: { authorization: this._token, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: e.name, link: e.link }) }).then(((e) => t._getResponseData(e))); } }, { key: 'getUserInfo', value() { const e = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/users/me'), { headers: { authorization: this._token, 'Content-Type': 'application/json' } }).then(((t) => e._getResponseData(t))); } }, { key: 'setProfileInfo', value(e, t) { const n = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/users/me'), { method: 'PATCH', headers: { authorization: this._token, 'Content-Type': 'application/json' }, body: JSON.stringify({ name: e, about: t }) }).then(((e) => n._getResponseData(e))); } }, { key: 'setAvatar', value(e) { const t = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/users/me/avatar'), { method: 'PATCH', headers: { authorization: this._token, 'Content-Type': 'application/json' }, body: JSON.stringify({ avatar: e }) }).then(((e) => t._getResponseData(e))); } }, { key: 'likeCard', value(e) { const t = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/cards/likes/').concat(e), { method: 'PUT', headers: { authorization: this._token, 'Content-Type': 'application/json' } }).then(((e) => t._getResponseData(e))); } }, { key: 'deleteCardLike', value(e) { const t = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/cards/likes/').concat(e), { method: 'DELETE', headers: { authorization: this._token, 'Content-Type': 'application/json' } }).then(((e) => t._getResponseData(e))); } }, { key: 'deleteCard', value(e) { const t = this; return fetch(''.concat(this._address, '/').concat(this._cohort, '/cards/').concat(e), { method: 'DELETE', headers: { authorization: this._token, 'Content-Type': 'application/json' } }).then(((e) => t._getResponseData(e))); } }]), e; }())({ address: 'https://mesto.nomoreparties.co/v1', token: '0ab7ee2c-4048-41b7-8933-e3538494cc1c', cohort: 'cohort-17' }); const b = `${n.p}static/media/deleteButton.a274c87c.svg`; const O = c.a.createContext(); const v = function (e) {
      const t = c.a.useContext(O); const n = e.card.owner._id === t._id; const o = 'elements__delete-button '.concat(n ? 'elements__delete-button_visible' : 'elements__delete-button_hidden'); const s = e.card.likes.some(((e) => e._id === t._id)); const i = 'elements__like-button '.concat(s ? 'elements__like-button_active' : ''); return Object(a.jsxs)('div', {
        className: 'elements__element',
        children: [Object(a.jsx)('img', {
          src: e.card.link, alt: e.card.name, className: 'elements__image', onClick() { e.onCardClick(e.card); },
        }), Object(a.jsx)('h2', { className: 'elements__title', children: e.card.name }), Object(a.jsx)('button', { className: o, onClick() { e.onDeleteClick(e.card); }, children: Object(a.jsx)('img', { src: b, alt: '\u0423\u0434\u0430\u043b\u0438\u0442\u044c' }) }), Object(a.jsxs)('div', { className: 'elements__like-group', children: [Object(a.jsx)('button', { className: i, onClick() { e.onLikeClick(e.card); }, type: 'button' }), Object(a.jsx)('span', { className: 'elements__like-score', children: e.card.likes.length })] })],
      });
    }; const x = function (e) {
      const t = c.a.useContext(O); const n = c.a.useState(!1); const o = Object(l.a)(n, 2); const s = o[0]; const i = o[1]; return Object(a.jsxs)(a.Fragment, {
        children: [Object(a.jsxs)('section', {
          className: 'profile',
          children: [Object(a.jsxs)('div', {
            className: 'profile__avatar-container', onClick: e.onEditAvatar, onMouseEnter() { i(!0); }, onMouseLeave() { i(!1); }, children: [Object(a.jsx)('img', { src: d, className: 'profile__avatar-redact-image '.concat(s ? 'profile__avatar-redact-image_visible' : ''), alt: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c' }), Object(a.jsx)('div', { className: 'profile__avatar-redaction', children: Object(a.jsx)('img', { src: t.avatar, className: 'profile__image', alt: '\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430' }) })],
          }), Object(a.jsxs)('div', {
            className: 'profile__info',
            children: [Object(a.jsx)('h1', { className: 'profile__name', children: t.name }), Object(a.jsx)('button', {
              className: 'profile__edit-button', type: 'button', onClick: e.onEditProfile, children: Object(a.jsx)('img', { alt: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c', src: m }),
            }), Object(a.jsx)('p', { className: 'profile__profession', children: t.about })],
          }), Object(a.jsx)('button', {
            className: 'profile__add-button', type: 'button', onClick: e.onAddPlace, children: Object(a.jsx)('img', { alt: '\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c', src: h }),
          })],
        }), Object(a.jsx)('section', {
          className: 'elements',
          children: e.cards.map(((t) => Object(a.jsx)(v, {
            card: t, onCardClick: e.onCardClick, onLikeClick: e.likeCard, onDeleteClick: e.deleteCard,
          }, t._id))),
        })],
      });
    }; const g = function () { return Object(a.jsx)('footer', { className: 'footer', children: Object(a.jsx)('p', { className: 'footer__copyright', children: '\xa9 2020 Mesto Russia' }) }); }; const C = `${n.p}static/media/Close_Icon.118074ba.svg`; const k = function (e) {
      return Object(a.jsx)('div', {
        className: 'popup '.concat(e.isOpen ? 'popup_opened' : ' '),
        id: 'popup-'.concat(e.name),
        children: Object(a.jsxs)('div', {
          className: 'popup__container',
          children: [Object(a.jsx)('h3', { className: 'popup__title', children: e.title }), Object(a.jsx)('form', {
            onSubmit: e.onSubmit, method: 'post', name: 'popup-profile-form', className: 'popup__form', id: 'popup-profile-form', children: Object(a.jsxs)('fieldset', { className: 'popup__form-set', children: [e.children, Object(a.jsx)('button', { className: 'popup__button-save popup__button-submit', type: 'submit', children: e.buttonName })] }),
          }), Object(a.jsx)('button', {
            className: 'popup__close-button', type: 'reset', onClick: e.onClose, children: Object(a.jsx)('img', { src: C, className: 'popup__close-image', alt: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c' }),
          })],
        }),
      });
    }; const N = function (e) {
      return Object(a.jsx)('div', {
        className: 'popup '.concat(e.card ? 'popup_opened' : ' '),
        id: 'popup-avatar',
        children: Object(a.jsxs)('div', {
          className: 'popup__container-image',
          children: [Object(a.jsx)('img', { src: e.card.link, className: 'popup__illustration-image', alt: e.card.name }), Object(a.jsx)('h2', { className: 'popup__title-image', children: e.card.name }), Object(a.jsx)('button', {
            onClick: e.onClose, className: 'popup__close-button-image', type: 'reset', children: Object(a.jsx)('img', { src: C, className: 'popup__close-image', alt: '\u0417\u0430\u043a\u0440\u044b\u0442\u044c' }),
          })],
        }),
      });
    }; const y = function (e) {
      const t = c.a.useContext(O); const n = c.a.useState(''); const s = Object(l.a)(n, 2); const i = s[0]; const r = s[1]; const u = Object(o.useState)(''); const p = Object(l.a)(u, 2); const d = p[0]; const m = p[1]; return c.a.useEffect((() => { r(t.name || ''), m(t.about || ''); }), [t]), Object(a.jsx)(k, {
        name: 'profile',
        title: '\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c',
        buttonName: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onUpdateUser({ name: i, about: d }), e.onClose(); },
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsxs)('label', {
            className: 'popup__form-field',
            children: [Object(a.jsx)('input', {
              id: 'name-input', type: 'text', className: ' popup__form-input popup__form-name', value: i, name: 'name', required: !0, minLength: 2, maxLength: 42, onChange(e) { r(e.target.value); },
            }), Object(a.jsx)('span', { className: 'popup__form-input-error ', id: 'name-input-error' })],
          }), Object(a.jsxs)('label', {
            className: 'popup__form-field',
            children: [Object(a.jsx)('input', {
              id: 'job-input', type: 'text', className: 'popup__form-input popup__form-job', value: d, name: 'about', required: !0, minLength: 2, maxLength: 200, onChange(e) { m(e.target.value); },
            }), Object(a.jsx)('span', { className: 'popup__form-input-error ', id: 'job-input-error' })],
          })],
        }),
      });
    }; const S = function (e) {
      const t = c.a.useRef(''); return c.a.useEffect((() => { t.current.value = ''; })), Object(a.jsx)(k, {
        name: 'avatar',
        title: '\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440',
        buttonName: '\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(n) { n.preventDefault(), console.log(t), e.onUpdateAvatar({ avatar: t.current.value }), e.onClose(); },
        children: Object(a.jsxs)('label', {
          className: 'popup__form-field',
          children: [Object(a.jsx)('input', {
            ref: t, id: 'avatar-input', type: 'url', className: 'popup__form-input popup__avatar', name: 'link', required: !0, placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440',
          }), Object(a.jsx)('span', { className: 'popup__form-input-error ', id: 'avatar-input-error' })],
        }),
      });
    }; const D = function (e) {
      const t = c.a.useState(''); const n = Object(l.a)(t, 2); const o = n[0]; const s = n[1]; const i = c.a.useState(''); const r = Object(l.a)(i, 2); const u = r[0]; const p = r[1]; return Object(a.jsx)(k, {
        name: 'cards',
        title: '\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e',
        buttonName: '\u0421\u043e\u0437\u0434\u0430\u0442\u044c',
        isOpen: e.isOpen,
        onClose: e.onClose,
        onSubmit(t) { t.preventDefault(), e.onAddPlace({ name: o, link: u }), e.onClose(), s(''), p(''); },
        children: Object(a.jsxs)(a.Fragment, {
          children: [Object(a.jsxs)('label', {
            className: 'popup__form-field',
            children: [Object(a.jsx)('input', {
              id: 'title-input', value: o, onChange(e) { s(e.target.value); }, type: 'text', className: ' popup__form-input popup__form-title', name: 'name', placeholder: '\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435', required: !0, minLength: 2, maxLength: 30,
            }), Object(a.jsx)('span', { className: 'popup__form-input-error ', id: 'title-input-error' })],
          }), Object(a.jsxs)('label', {
            className: 'popup__form-field',
            children: [Object(a.jsx)('input', {
              id: 'link-input', value: u, onChange(e) { p(e.target.value); }, type: 'url', className: 'popup__form-input popup__form-link', name: 'link', placeholder: '\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443', required: !0,
            }), Object(a.jsx)('span', { className: 'popup__form-input-error ', id: 'link-input-error' })],
          })],
        }),
      });
    }; const P = function () {
      const e = c.a.useState(!1); const t = Object(l.a)(e, 2); const n = t[0]; const o = t[1]; const s = c.a.useState(!1); const i = Object(l.a)(s, 2); const u = i[0]; const d = i[1]; const m = c.a.useState(!1); const h = Object(l.a)(m, 2); const j = h[0]; const _ = h[1]; const b = c.a.useState({}); const v = Object(l.a)(b, 2); const C = v[0]; const P = v[1]; const E = c.a.useState([]); const T = Object(l.a)(E, 2); const L = T[0]; const A = T[1]; function R() { _(!1), o(!1), d(!1), F(!1); }c.a.useEffect((() => { f.getUserInfo().then(((e) => { P(e); })), f.getInitialCards().then(((e) => { A(e), console.log(e); })); }), []); const I = c.a.useState(!1); const U = Object(l.a)(I, 2); const z = U[0]; var F = U[1]; return Object(a.jsxs)(O.Provider, {
        value: C,
        children: [Object(a.jsx)(p, {}), Object(a.jsx)(x, {
          onEditProfile() { o(!0); }, onAddPlace() { d(!0); }, onEditAvatar() { _(!0); }, onCardClick(e) { F(e); }, likeCard(e) { const t = e.likes.some(((e) => e._id === C._id)); f.likeCard(e._id, !t).then(((t) => { const n = L.map(((n) => (n._id === e._id ? t : n))); A(n); })).catch(((e) => { console.log(e); })); }, deleteCard(e) { f.deleteCard(e._id).then((() => { const t = L.filter(((t) => t._id !== e._id)); A(t); })).catch(((e) => { console.log(e); })); }, cards: L,
        }), Object(a.jsx)(g, {}), Object(a.jsx)(y, { isOpen: n, onClose: R, onUpdateUser(e) { f.setProfileInfo(e.name, e.about).then(((e) => { P(e); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(S, { isOpen: j, onClose: R, onUpdateAvatar(e) { f.setAvatar(e.avatar).then(((e) => { P(e); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(D, { isOpen: u, onClose: R, onAddPlace(e) { f.addNewCards(e).then(((e) => { A([e].concat(Object(r.a)(L))); })).catch(((e) => { console.log(e); })); } }), Object(a.jsx)(k, {
          name: 'delete', title: '\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?', onClose: R, buttonName: '\u0414\u0430',
        }), Object(a.jsx)(N, { name: 'image', card: z, onClose: R })],
      });
    }; const E = function (e) { e && e instanceof Function && n.e(3).then(n.bind(null, 17)).then(((t) => { const n = t.getCLS; const a = t.getFID; const o = t.getFCP; const c = t.getLCP; const s = t.getTTFB; n(e), a(e), o(e), c(e), s(e); })); }; i.a.render(Object(a.jsx)(c.a.StrictMode, { children: Object(a.jsx)(P, {}) }), document.getElementById('root')), E();
  },
}, [[16, 1, 2]]]);
// # sourceMappingURL=main.3d484020.chunk.js.map
