(ns component.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(defn hello-om
  [app owner]
  (reify
    om/IDisplayName
    (display-name [_]
      "hello-om")

    om/IRender
    (render [_]
      (dom/h1 nil "Hello Om!"))))

(om/root
  hello-om
  nil
  {:target (. js/document (getElementById "app"))})
