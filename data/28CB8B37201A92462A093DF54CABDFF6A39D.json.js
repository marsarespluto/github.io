GS.dataCache['28CB8B37201A92462A093DF54CABDFF6A39D'] = {
    "uid": "28CB8B37201A92462A093DF54CABDFF6A39D",
    "isLoaded": true,
    "lastModificationTime": 0,
    "items": {
        "name": "Arrival",
        "type": "vn.scene",
        "parentId": "20EEF90963AEF24E2E284217094B2A8591AD",
        "chapterUid": "20EEF90963AEF24E2E284217094B2A8591AD",
        "order": 0,
        "localizableStrings": {
            "94944A143D977242669B14F31CB0126C7943": {
                "t": "As you step out onto the soft, mossy ground of Limbo, the warmth of the pseudo-sun warming your skin, you realise now that you have reached the end of your first voyage. ",
                "d": {
                    "cid": 0,
                    "eid": "E3D0099E163EC94E6A3B8E648DB154ED07AD"
                }
            },
            "0BFCE00F68E48542E6183D66549621D14701": {
                "t": "You look back at your wayward souls.\n Annie's eyes shining in the warm light, the light warming Tobias' freckled cheeks, Envy's lips parted in awe of the view. ",
                "d": {
                    "cid": 0,
                    "eid": "495186C61A5C934B157B3271F727E2EA5B83"
                }
            },
            "8B4411A45FE4A64C9A58DE83E81D1ED99DF2": {
                "t": "Do you have any final goodbyes, {N:0001}?",
                "d": {
                    "cid": 0,
                    "eid": "5F2E7AC5369E61480C480DB826685527F804"
                }
            }
        },
        "commands": [
            {
                "id": "vn.ChangeBackground",
                "params": {
                    "viewport": {
                        "type": "scene"
                    },
                    "graphic": {
                        "name": "city",
                        "hue": 0,
                        "opacity": 255,
                        "blending": 0,
                        "tone": {
                            "red": 0,
                            "green": 0,
                            "blue": 0,
                            "grey": 0
                        }
                    },
                    "layer": 0,
                    "duration": 0,
                    "waitForCompletion": 0,
                    "blendMode": 0,
                    "origin": 0,
                    "zOrder": 0,
                    "loopVertical": 0,
                    "loopHorizontal": 0,
                    "easing": {
                        "type": 0,
                        "inOut": 1
                    },
                    "animation": {
                        "type": 1,
                        "movement": 0,
                        "mask": {
                            "graphic": null,
                            "vague": 30
                        }
                    },
                    "fieldFlags": {
                        "duration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "95AA7F33236F534B0E69714514E18C254C8C",
                "indent": 0
            },
            {
                "id": "gs.PlayMusic",
                "params": {
                    "layer": 0,
                    "music": {
                        "name": "happy mood",
                        "volume": 100,
                        "playbackRate": 100
                    },
                    "fadeInDuration": 0,
                    "playTime": {
                        "min": 10,
                        "max": 30
                    },
                    "playRange": {
                        "start": 10,
                        "end": 20
                    },
                    "playType": 0,
                    "fieldFlags": {
                        "music.volume": 1,
                        "music.playbackRate": 1,
                        "fadeInDuration": 1
                    },
                    "previewBackground": {
                        "name": "$live_preview_snapshot"
                    }
                },
                "uid": "3E5F7A4F4D4ED044156ADA21B89D6D8A5A8D",
                "indent": 0
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "94944A143D977242669B14F31CB0126C7943",
                        "defaultText": "As you step out onto the soft, mossy ground of Limbo, the warmth of the pseudo-sun warming your skin, you realise now that you have reached the end of your first voyage. "
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "E3D0099E163EC94E6A3B8E648DB154ED07AD",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "0BFCE00F68E48542E6183D66549621D14701",
                        "defaultText": "You look back at your wayward souls.\n Annie's eyes shining in the warm light, the light warming Tobias' freckled cheeks, Envy's lips parted in awe of the view. "
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "495186C61A5C934B157B3271F727E2EA5B83",
                "indent": 0,
                "expanded": true
            },
            {
                "id": "gs.ShowMessage",
                "params": {
                    "waitForCompletion": 1,
                    "duration": 15,
                    "expressionId": null,
                    "custom": {
                        "object": {
                            "x": 0,
                            "y": 0,
                            "size": {
                                "width": 300,
                                "height": 100
                            }
                        }
                    },
                    "message": {
                        "lcId": "8B4411A45FE4A64C9A58DE83E81D1ED99DF2",
                        "defaultText": "Do you have any final goodbyes, {N:0001}?"
                    },
                    "position": 0,
                    "characterId": 0,
                    "partial": 0,
                    "fieldFlags": {
                        "duration": 1
                    },
                    "expressions": [],
                    "animations": []
                },
                "uid": "5F2E7AC5369E61480C480DB826685527F804",
                "indent": 0,
                "expanded": true
            }
        ],
        "livePreviewDisabled": false
    },
    "summary": [
        "name",
        "type",
        "parentId",
        "chapterUid",
        "order"
    ]
}